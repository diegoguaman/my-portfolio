import React, { useEffect, useState } from 'react';

interface SubmitFeedbackProps {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage?: string;
}

const SubmitFeedback: React.FC<SubmitFeedbackProps> = ({
  isPending,
  isSuccess,
  isError,
  errorMessage,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    if ((isSuccess || isError) && !isPending) {
      setVisible(true);
      timer = setTimeout(() => setVisible(false), 10_000);
    }
    if (isPending) {
      setVisible(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isPending, isSuccess, isError]);
  if (!visible) return null;
  if (isPending) return <p className="text-blue-500">Enviando...</p>;
  if (isSuccess)
    return <p className="text-green-600">¡Formulario enviado correctamente!</p>;
  if (isError)
    return (
      <p className="text-red-600">
        {errorMessage ?? 'Ha ocurrido un error al enviar.'}
      </p>
    );
  return null;
};

export default SubmitFeedback;
