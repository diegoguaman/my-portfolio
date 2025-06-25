import { api } from './api';
import { SubmitFormDto } from '../types';

export async function submitContactForm(data: SubmitFormDto) {
  const response = await api.post<{
    id: number;
    createdAt: string;
  }>('/form', data);
  return response.data;
}
