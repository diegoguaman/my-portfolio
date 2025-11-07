import { useMutation } from '@tanstack/react-query';
import type { AxiosError } from 'axios';
import { submitContactForm } from '../services/formService';
import type { SubmitFormDto, FormSubmissionResponse } from '../models';
import { toast } from 'react-hot-toast';

/**
 * Hook to submit the contact form
 * Handles form submission with loading, success, and error states
 */
export function useSubmitForm() {
  return useMutation<
    FormSubmissionResponse,
    AxiosError,
    SubmitFormDto
  >({
    mutationFn: submitContactForm,
    onSuccess: (data) => {
      console.log('Form submitted successfully with id:', data.id);
      toast.success('¡Formulario enviado exitosamente!');
    },
    onError: (error) => {
      console.error('Error submitting form:', error.message);
      toast.error(`Error al enviar: ${error.message}`);
    },
  });
}
