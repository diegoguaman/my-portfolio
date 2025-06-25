export interface SubmitFormDto {
  name: string;
  email: string;
  subject: string;
  message: string;
  cookies?: Record<string, string>;
}
