import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { submitCookieConsent } from "../services/cookieService";
import type { CookieConsentDto } from "../types";

interface CookieConsentResponse {
  id: number;
  consentGiven: boolean;
  createdAt: string;
}

export function useCookieConsent() {
  return useMutation<
    CookieConsentResponse,
    AxiosError,
    CookieConsentDto
  >({
    mutationFn: (dto) => submitCookieConsent(dto),
    onError(error) {
      console.error("Error guardando consentimiento:", error.message);
    },
    onSuccess(data) {
      console.log("Consentimiento guardado:", data);
    },
  });
}
