/**
 * Form Service
 * Business logic layer for form operations
 * Uses FormRepository for data access
 */

import { formRepository } from '../repositories/form.repository';
import type { SubmitFormDto, FormSubmissionResponse } from '../models';

/**
 * Submits the contact form to the backend
 * @param data - Form data to submit
 * @returns Promise with the submission response
 */
export async function submitContactForm(
  data: SubmitFormDto
): Promise<FormSubmissionResponse> {
  return formRepository.submitContactForm(data);
}

/**
 * Checks if the form submission service is available
 * @returns Promise with health status
 */
export async function checkFormServiceHealth(): Promise<boolean> {
  return formRepository.checkHealth();
}
