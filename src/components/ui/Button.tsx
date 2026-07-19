'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'flag';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-ink text-paper border-ink hover:bg-transparent hover:text-ink',
  secondary: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper',
  ghost: 'bg-transparent text-ink border-transparent hover:border-ink',
  flag: 'bg-flag text-white border-flag hover:bg-transparent hover:text-flag',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-xs gap-1.5',
  md: 'px-7 py-3 text-sm gap-2',
  lg: 'px-9 py-4 text-base gap-2.5',
  xl: 'px-11 py-5 text-lg gap-3',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-cursor-hover
        className={cn(
          'inline-flex items-center justify-center rounded-full border font-display font-semibold uppercase tracking-wide transition-colors duration-300 ease-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
