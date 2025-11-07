# Environment Configuration

This document describes all environment variables needed to run the portfolio frontend application.

## Required Variables

### `VITE_API_URL`

**Required**: Yes  
**Description**: URL of the backend API  
**Production Value**: `https://portfolio-back-h5tl.onrender.com/api`  
**Development Value**: `http://localhost:3000/api`

Example:
```bash
VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api
```

## Optional Variables

### `VITE_GEMINI_API_KEY`

**Required**: No (only for AI features)  
**Description**: Google Gemini API key for AI text and image generation  
**Security Note**: ⚠️ This should ideally be moved to the backend to avoid exposing API keys on the client

Example:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Setup Instructions

1. Create a `.env` file in the root of the project
2. Copy the following template and fill in your values:

```bash
# Backend API URL (REQUIRED)
VITE_API_URL=https://portfolio-back-h5tl.onrender.com/api

# Google Gemini API Key (OPTIONAL - only for AI features)
VITE_GEMINI_API_KEY=your_key_here
```

3. Restart the development server after changing environment variables

## Environment Validation

The application validates that all required environment variables are present at startup. If any required variable is missing, the application will throw an error with details about which variables are missing.

## Backend API Endpoints

The backend should provide the following endpoints:

- `POST /api/form` - Submit contact form
- `GET /api/health` - Health check endpoint

Make sure your backend at `https://portfolio-back-h5tl.onrender.com` is running and accessible.

