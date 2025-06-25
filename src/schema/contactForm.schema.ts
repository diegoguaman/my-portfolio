import { z } from 'zod';

export const ContactFormSchema = z.object({
  name:    z.string().min(1, 'El nombre es obligatorio'),
  email:   z.string().email('Email no válido'),
  subject: z.string().min(1, 'El asunto es obligatorio'),
  message: z.string().min(1, 'El mensaje es obligatorio'),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
