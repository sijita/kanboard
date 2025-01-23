import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
}

export default function Button({
  icon,
  type = 'button',
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-lg px-4 py-2 ${
        icon && 'flex items-center justify-center gap-2'
      } ${className}`}
      {...props}
    >
      {icon}
      {text}
    </button>
  );
}
