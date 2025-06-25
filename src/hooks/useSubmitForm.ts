// src/hooks/useSubmitForm.ts
import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { submitContactForm } from '../services/formService';
import type { SubmitFormDto } from '../types';
import { toast } from 'react-hot-toast';

/**
 * Hook para enviar el formulario de contacto.
 */
export function useSubmitForm() {
  return useMutation<
    { id: number; createdAt: string }, // TData
    AxiosError,                        // TError
    SubmitFormDto                      // TVariables
  >({
    // Aquí va la función de mutación
    mutationFn: (data) => submitContactForm(data),
    onSuccess: (data) => {
      console.log('Formulario enviado con id:', data.id);
      toast.success('Formulario enviado!');
      
    },
    onError: (error) => {
      console.error('Error enviando formulario:', error.message);
      toast.error(`No se pudo enviar: ${error.message}`);
    },
  });
}
