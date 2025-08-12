import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    rounded-md font-medium
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    ${variant === 'primary' && 'bg-primary text-white hover:bg-primary/90'}
    ${variant === 'secondary' && 'bg-secondary text-dark hover:bg-secondary/80'}
    ${variant === 'outline' && 'border border-primary text-primary bg-transparent hover:bg-primary/10'}
    ${variant === 'ghost' && 'text-primary bg-transparent hover:bg-primary/10'}
    ${size === 'sm' && 'px-3 py-1 text-xs'}
    ${size === 'md' && 'px-4 py-1.5 text-sm'} 
    ${size === 'lg' && 'px-5 py-2 text-base'}
    ${className}
  `;

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}