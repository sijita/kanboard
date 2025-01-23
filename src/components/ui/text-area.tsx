import { TextareaHTMLAttributes } from 'react';

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  rows?: number;
  required?: boolean;
}

export default function TextArea({
  name,
  label,
  rows = 3,
  required = false,
  ...props
}: TextAreaProps) {
  return (
    <div className='space-y-1'>
      <label className='block text-sm font-medium text-gray-700' htmlFor={name}>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        className='block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#baff30] focus:ring-[#baff30]'
        rows={rows}
        required={required}
        {...props}
      />
    </div>
  );
}
