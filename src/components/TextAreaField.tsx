import React from 'react';

interface TextAreaFieldProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {
  label: string;
  error?: string;
}

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(({ label, error, ...textareaProps }, ref) => (
  <div className="mb-6">
    <label className="block mb-1 font-medium">{label}</label>
    <textarea
      ref={ref}
      className={`w-full p-2 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded resize-none h-32`}
      {...textareaProps}
    />
    {error && <p className="text-red-600 mt-1">{error}</p>}
  </div>
));

TextAreaField.displayName = 'TextAreaField';
