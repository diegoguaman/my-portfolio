import { api } from './api';
import type { CookieConsentDto } from '../types';

export async function submitCookieConsent(dto: CookieConsentDto) {
  const res = await api.post<{ id: number; consentGiven: boolean; createdAt: string }>(
    '/cookie-consent',
    dto
  );
  return res.data;
}
