/**
 * Centralized error handling utilities
 */

import { AxiosError } from 'axios';

export interface AppError {
  message: string;
  code?: string;
  statusCode?: number;
}

/**
 * Extracts a user-friendly error message from an Axios error
 * @param error - The error to extract the message from
 * @returns User-friendly error message
 */
export function extractErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) {
    if (error.response?.data) {
      const data = error.response.data;
      if (typeof data === 'object' && 'message' in data) {
        return String(data.message);
      }
      if (typeof data === 'string') {
        return data;
      }
    }
    if (error.message) {
      return error.message;
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'Ha ocurrido un error inesperado';
}

/**
 * Creates a standardized AppError from any error
 * @param error - The error to normalize
 * @returns Normalized AppError
 */
export function normalizeError(error: unknown): AppError {
  if (error instanceof AxiosError) {
    return {
      message: extractErrorMessage(error),
      code: error.code,
      statusCode: error.response?.status,
    };
  }
  if (error instanceof Error) {
    return {
      message: error.message,
    };
  }
  return {
    message: 'Ha ocurrido un error inesperado',
  };
}

/**
 * Checks if an error is a network error
 * @param error - The error to check
 * @returns True if it's a network error
 */
export function isNetworkError(error: unknown): boolean {
  if (error instanceof AxiosError) {
    return !error.response && error.code === 'ERR_NETWORK';
  }
  return false;
}

/**
 * Checks if an error is a timeout error
 * @param error - The error to check
 * @returns True if it's a timeout error
 */
export function isTimeoutError(error: unknown): boolean {
  if (error instanceof AxiosError) {
    return error.code === 'ECONNABORTED';
  }
  return false;
}

