import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

export default function Input({
  name,
  label,
  type = 'text',
  required,
  ...props
}: InputProps) {
  return (
    <div className='space-y-1'>
      <label className='block text-sm font-medium text-gray-700'>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <input
        name={name}
        type={type}
        className='block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#baff30] focus:ring-[#baff30]'
        required={required}
        {...props}
      />
    </div>
  );
}
