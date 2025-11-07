/**
 * Form-related models and types
 */

export interface SubmitFormDto {
  name: string;
  email: string;
  subject: string;
  message: string;
  cookies?: Record<string, string>;
}

export interface FormSubmissionResponse {
  id: number;
  createdAt: string;
}

export interface CookieConsentDto {
  cookieName: string;
  consentGiven: boolean;
}

