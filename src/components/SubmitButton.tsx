import React from 'react';

interface SubmitButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  disabled = false,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className="px-6 py-3 bg-back rounded-lg text-white uppercase border-2 border-back hover:text-back hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);
