import { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: { id: string; name: string }[];
  value?: string;
  required?: boolean;
}

export default function Select({
  name,
  label,
  options,
  required = false,
  ...props
}: SelectProps) {
  return (
    <div className='space-y-1'>
      <label className='block text-sm font-medium text-gray-700'>
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>
      <select
        name={name}
        className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:border-[#baff30] focus:ring-[#baff30]'
        required={required}
        {...props}
      >
        <option value='' disabled>
          Seleccione una opción
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
