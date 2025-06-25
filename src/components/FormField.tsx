import React from 'react';

type FormFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'ref'> & {
  label: string;
  error?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, ...inputProps }, ref) => (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        ref={ref}
        className={`w-full p-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded`}
        {...inputProps}
      />
      {error && <p className="text-red-600 mt-1">{error}</p>}
    </div>
  )
);
FormField.displayName = 'FormField';
