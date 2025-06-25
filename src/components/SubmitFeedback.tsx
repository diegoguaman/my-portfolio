import React from 'react';

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
