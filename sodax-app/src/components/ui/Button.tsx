'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-tokens';

/**
 * 按鈕組件 (Button Component)
 * 基於設計令牌的可重用按鈕組件
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 按鈕變體類型
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * 按鈕尺寸
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 是否為加載狀態
   */
  loading?: boolean;
  /**
   * 子元素
   */
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, disabled, children, ...props }, ref) => {
    const baseStyles = [
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    ];

    const variants = {
      primary: [
        'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500 shadow-sm hover:shadow-md',
        'active:bg-teal-800 active:shadow-sm transform active:scale-[0.98]',
      ],
      secondary: [
        'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500 border border-neutral-300',
        'active:bg-neutral-300 transform active:scale-[0.98]',
      ],
      outline: [
        'border-2 border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-500 bg-transparent',
        'active:bg-teal-100 transform active:scale-[0.98]',
      ],
      ghost: [
        'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 focus:ring-neutral-500',
        'active:bg-neutral-200 transform active:scale-[0.98]',
      ],
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    const focusRing = variant === 'primary' ? 'focus:ring-teal-500' : 'focus:ring-neutral-500';

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          focusRing,
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };