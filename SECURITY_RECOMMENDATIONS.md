# Security Recommendations

## 🔒 Critical: Move AI Logic to Backend

### Current Issue

The AI integration (Google Gemini API) is currently implemented on the frontend, which means:

1. **API Key Exposure**: The `VITE_GEMINI_API_KEY` is exposed in the client bundle
2. **Rate Limit Abuse**: Anyone can inspect your key and use it for their own purposes
3. **Cost Risk**: Unauthorized usage can lead to unexpected API costs

### Recommended Solution

Move all AI generation logic to your backend at `https://portfolio-back-h5tl.onrender.com`:

#### Backend Implementation (Recommended)

```typescript
// backend/src/ai/ai.controller.ts
@Controller('ai')
export class AIController {
  @Post('generate-text')
  async generateText(@Body() dto: GenerateTextDto) {
    const apiKey = process.env.GEMINI_API_KEY; // Server-side only
    const ai = new GoogleGenAI({ apiKey });
    const res = await ai.models.generateContent({
      model: dto.model || 'gemini-2.5-flash',
      contents: dto.prompt,
    });
    return { text: res.text };
  }

  @Post('generate-images')
  async generateImages(@Body() dto: GenerateImagesDto) {
    const apiKey = process.env.GEMINI_API_KEY; // Server-side only
    const ai = new GoogleGenAI({ apiKey });
    const res = await ai.models.generateImages({
      model: dto.model || 'imagen-3.0-generate-002',
      prompt: dto.prompt,
      config: { numberOfImages: dto.numberOfImages || 1 },
    });
    return { images: res.generatedImages };
  }
}
```

#### Frontend Changes

After implementing the backend endpoints, update the frontend:

```typescript
// src/repositories/ai.repository.ts
export class AIRepository {
  async generateText(params: TextParams): Promise<string> {
    const response = await api.post('/ai/generate-text', params);
    return response.data.text;
  }

  async generateImages(params: ImageParams): Promise<GeneratedImage[]> {
    const response = await api.post('/ai/generate-images', params);
    return response.data.images;
  }
}
```

### Benefits

1. ✅ API keys stay secure on the server
2. ✅ Better rate limiting and usage control
3. ✅ Can add authentication/authorization
4. ✅ Can implement caching and logging
5. ✅ Can add content moderation before sending to AI

## Other Security Best Practices

### Environment Variables

- ✅ Never commit `.env` files to git
- ✅ Use different keys for development and production
- ✅ Rotate API keys regularly
- ✅ Use environment variable validation (already implemented)

### API Security

- ✅ Always use HTTPS in production
- ✅ Implement CORS properly on the backend
- ✅ Add rate limiting to prevent abuse
- ✅ Validate and sanitize all user inputs

### Frontend Security

- ✅ Keep dependencies updated
- ✅ Use Content Security Policy (CSP)
- ✅ Sanitize user-generated content
- ✅ Implement proper error handling (already improved)

