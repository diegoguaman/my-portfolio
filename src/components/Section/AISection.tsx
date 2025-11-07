import React, { useCallback, useState } from "react";
import { generateImages, generateText, GeneratedImage } from "../../services/genai";

type AISectionProps = {
  id?: string;
};

export const AISection: React.FC<AISectionProps> = ({ id = "ia" }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [textResult, setTextResult] = useState<string>("");
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loadingText, setLoadingText] = useState<boolean>(false);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onGenerateText = useCallback(async () => {
    setError("");
    setLoadingText(true);
    try {
      const text = await generateText({
        prompt: `Explain this in one concise paragraph: ${prompt}`,
        model: "gemini-2.5-flash",
      });
      setTextResult(text);
    } catch (e) {
      setError("Text generation failed. Check your API key or quota." + e);
    } finally {
      setLoadingText(false);
    }
  }, [prompt]);

  const onGenerateImage = useCallback(async () => {
    setError("");
    setLoadingImage(true);
    try {
      const imgs = await generateImages({
        prompt,
        model: "imagen-3.0-generate-002",
        numberOfImages: 1,
      });
      setImages(imgs);
    } catch (e) {
      setError("Image generation failed. The model may have blocked the prompt or the key is invalid." + e);
    } finally {
      setLoadingImage(false);
    }
  }, [prompt]);

  const canGenerate = prompt.trim().length > 0;

  return (
    <section id={id} className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl font-bold mb-6">IA — Crea imágenes con un prompt</h2>

        <div className="grid gap-4">
          <label className="text-sm font-medium" htmlFor="ai-prompt">Prompt</label>
          <textarea
            id="ai-prompt"
            className="w-full rounded-xl border p-3 outline-none focus:ring-2"
            placeholder="e.g. A cyberpunk city at night with neon reflections on wet streets"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
          />

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onGenerateText}
              disabled={!canGenerate || loadingText}
              className="rounded-2xl bg-black px-4 py-2 text-white disabled:opacity-50"
            >
              {loadingText ? "Generando texto..." : "Probar texto (Gemini)"}
            </button>

            <button
              type="button"
              onClick={onGenerateImage}
              disabled={!canGenerate || loadingImage}
              className="rounded-2xl bg-indigo-600 px-4 py-2 text-white disabled:opacity-50"
            >
              {loadingImage ? "Generando imagen..." : "Generar imagen (Imagen 3)"}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-600 mt-2">{error}</p>
          )}

          {textResult && (
            <div className="rounded-xl border p-4 mt-2 whitespace-pre-wrap">
              {textResult}
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {images.map((img, idx) => (
                <figure key={idx} className="rounded-2xl overflow-hidden border">
                  <img
                    src={img.dataUrl}
                    alt={`Generated ${idx + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                  <figcaption className="p-3 flex justify-between items-center">
                    <span className="text-sm text-gray-600">Resultado #{idx + 1}</span>
                    <a
                      href={img.dataUrl}
                      download={`ai-image-${idx + 1}.png`}
                      className="text-sm font-medium underline"
                    >
                      Descargar PNG
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AISection;
