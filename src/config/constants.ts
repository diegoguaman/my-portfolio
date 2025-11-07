/**
 * Application constants
 * Centralizes all magic strings and configuration values
 */

export const APP_CONFIG = {
  name: 'DGM DEV',
  title: 'Diego Guaman - Portfolio',
  description: 'Full Stack Developer Portfolio',
} as const;

export const SECTION_IDS = {
  hero: 'hero',
  about: 'acerca de',
  skills: 'tecnologías',
  projects: 'proyectos',
  ai: 'ia',
  contact: 'contacto',
} as const;

export const API_ENDPOINTS = {
  form: '/form',
  health: '/health',
} as const;

export const TOAST_CONFIG = {
  position: 'top-right',
  duration: {
    success: 4000,
    error: 6000,
  },
} as const;

export const FORM_CONFIG = {
  minNameLength: 1,
  minSubjectLength: 1,
  minMessageLength: 1,
  maxMessageLength: 1000,
} as const;

export const AI_CONFIG = {
  textModel: 'gemini-2.5-flash',
  imageModel: 'imagen-3.0-generate-002',
  defaultNumberOfImages: 1,
} as const;

export const NAVIGATION_CONFIG = {
  smoothScrollDuration: 500,
} as const;

