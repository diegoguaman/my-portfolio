/**
 * Environment configuration with validation
 * Centralizes all environment variables and validates they exist
 */

interface EnvironmentConfig {
  apiUrl: string;
  geminiApiKey: string | undefined;
  isDevelopment: boolean;
  isProduction: boolean;
}

/**
 * Validates that required environment variables are present
 * @throws Error if required variables are missing
 */
function validateEnvironment(): void {
  const requiredVars = ['VITE_API_URL'];
  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}

/**
 * Gets the environment configuration
 * @returns Validated environment configuration
 */
function getEnvironmentConfig(): EnvironmentConfig {
  validateEnvironment();
  return {
    apiUrl: import.meta.env.VITE_API_URL,
    geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY,
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
}

export const env = getEnvironmentConfig();

