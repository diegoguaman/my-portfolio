import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.config";
import { AI_CONFIG } from "../config/constants";

export type TextParams = {
  prompt: string;
  model?: string;
};

export type ImageParams = {
  prompt: string;
  model?: string;
  numberOfImages?: number;
};

export type GeneratedImage = {
  dataUrl: string;
};

/**
 * WARNING: Exposing API keys on the client is a security risk
 * TODO: Move this functionality to the backend
 */
if (!env.geminiApiKey) {
  console.warn(
    "VITE_GEMINI_API_KEY is missing. AI features will not work. " +
    "IMPORTANT: In production, move this to backend to protect API keys."
  );
}

const ai = new GoogleGenAI({ apiKey: env.geminiApiKey || '' });

/**
 * Generates text using Google Gemini AI
 * @param params - Text generation parameters
 * @returns Generated text
 */
export async function generateText(params: TextParams): Promise<string> {
  const { prompt, model = AI_CONFIG.textModel } = params;
  const res = await ai.models.generateContent({
    model,
    contents: prompt,
  });
  return res.text ?? "";
}

/**
 * Generates images using Google Imagen AI
 * @param params - Image generation parameters
 * @returns Array of generated images as data URLs
 */
export async function generateImages(params: ImageParams): Promise<GeneratedImage[]> {
  const {
    prompt,
    model = AI_CONFIG.imageModel,
    numberOfImages = AI_CONFIG.defaultNumberOfImages,
  } = params;
  const res = await ai.models.generateImages({
    model,
    prompt,
    config: {
      numberOfImages,
      includeRaiReason: true,
    },
  });
  const items = res?.generatedImages ?? [];
  const images: GeneratedImage[] = items
    .map((it) => it?.image?.imageBytes)
    .filter((bytes): bytes is string => typeof bytes === "string" && bytes.length > 0)
    .map((bytes) => ({
      dataUrl: `data:image/png;base64,${bytes}`,
    }));
  return images;
}
