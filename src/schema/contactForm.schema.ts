/**
 * Contact form validation schema
 * Uses Zod for runtime type validation
 */

import { z } from 'zod';
import { FORM_CONFIG } from '../config/constants';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(FORM_CONFIG.minNameLength, 'El nombre es obligatorio')
    .trim(),
  email: z
    .string()
    .email('Email no válido')
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(FORM_CONFIG.minSubjectLength, 'El asunto es obligatorio')
    .trim(),
  message: z
    .string()
    .min(FORM_CONFIG.minMessageLength, 'El mensaje es obligatorio')
    .max(FORM_CONFIG.maxMessageLength, `El mensaje no puede exceder ${FORM_CONFIG.maxMessageLength} caracteres`)
    .trim(),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
