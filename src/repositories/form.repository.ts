/**
 * Form Repository
 * Handles all API calls related to form submissions
 * Follows Repository pattern for better separation of concerns
 */

import { api } from '../services/api';
import type { SubmitFormDto, FormSubmissionResponse } from '../models';
import { API_ENDPOINTS } from '../config/constants';

export class FormRepository {
  /**
   * Submits a contact form
   * @param data - Form data to submit
   * @returns Promise with submission response
   */
  async submitContactForm(data: SubmitFormDto): Promise<FormSubmissionResponse> {
    const response = await api.post<FormSubmissionResponse>(
      API_ENDPOINTS.form,
      data
    );
    return response.data;
  }

  /**
   * Checks if the form submission service is available
   * @returns Promise with health status
   */
  async checkHealth(): Promise<boolean> {
    try {
      await api.get(API_ENDPOINTS.health);
      return true;
    } catch {
      return false;
    }
  }
}

export const formRepository = new FormRepository();

