// src/services/api.ts
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
});

// Interceptor de respuesta para errores
api.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    const message =
      err.response?.data &&
      typeof err.response.data === "object" &&
      "message" in err.response.data
        ? (err.response.data.message as string)
        : err.message;
    // Reemplazamos el mensaje en err para que los hooks lo reciban
    return Promise.reject(
      new AxiosError(message, err.code, err.config, err.request, err.response)
    );
  }
);
