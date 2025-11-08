import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { env } from "../config/env.config";
import { getOrCreateAnonymousId } from "../utils/anonymousId";

/**
 * Axios instance configured with base URL and default headers
 */
export const api = axios.create({
  baseURL: env.apiUrl,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

/**
 * Request interceptor to add anonymous ID header
 * Ensures all requests include the x-anonymous-id header
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const anonymousId = getOrCreateAnonymousId();
    config.headers.set('x-anonymous-id', anonymousId);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for error handling
 * Normalizes error responses for consistent error handling
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    let message = error.message;
    if (
      error.response?.data &&
      typeof error.response.data === "object" &&
      "message" in error.response.data
    ) {
      message = String(error.response.data.message);
    }
    const normalizedError = new AxiosError(
      message,
      error.code,
      error.config,
      error.request,
      error.response
    );
    return Promise.reject(normalizedError);
  }
);
