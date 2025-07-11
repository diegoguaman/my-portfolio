import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { useCookieConsent } from "../hooks/useCookieConsent";
import { CookieConsentDto } from "../types";

const BUTTON_CLASS = `px-4 py-2 rounded-md uppercase font-semibold 
  border-2 border-back transition duration-300 ease-in-out 
  focus:outline-none focus:ring-0`;
const CookieConsentBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const consentMutation = useCookieConsent();

  // Al montar, comprobamos si ya hay consentimiento
  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      // si no existe, mostramos banner después de 1s
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (acceptAll: boolean) => {
    const payload: CookieConsentDto[] = [
      { cookieName: 'necessary', consentGiven: true },
      { cookieName: 'analytics', consentGiven: acceptAll },
      { cookieName: 'marketing', consentGiven: acceptAll },
    ];
    // Envia cada preferencia al back
    payload.forEach(dto => consentMutation.mutate(dto));
    // Guardar en cookie 1 año, sameSite Lax y secure en prod
    Cookies.set("cookie_consent", JSON.stringify(payload), {
      expires: 365,
      sameSite: "Lax",
      secure: true,
    });
    // Aquí podrías enviar al backend: POST /cookie-consent
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="
            fixed inset-x-0 bottom-0 z-50
            bg-white dark:bg-gray-800
            shadow-lg
            p-4
            text-center
            flex flex-col md:flex-row
            items-center justify-between
            space-y-3 md:space-y-0 md:space-x-4
          "
        >
          <p className="text-sm text-gray-800 dark:text-gray-200 max-w-xl mx-auto">
            🍪 Usamos cookies para mejorar tu experiencia. Puedes aceptar todas o rechazarlas.
            Algunas necesarias siempre están activas.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <button
              onClick={() => handleChoice(false)}
              className={`${BUTTON_CLASS} bg-white text-back hover:bg-back hover:text-white`}
            >
              Rechazar todo
            </button>
            <button
              onClick={() => handleChoice(true)}
              className={`${BUTTON_CLASS} text-white bg-back hover:bg-hover`}
            >
              Aceptar todo
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
