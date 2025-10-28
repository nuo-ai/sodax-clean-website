'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

/**
 * 輸入框組件 (Input Component)
 * 基於設計令牌的可重用輸入框組件
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 輸入框變體類型
   */
  variant?: 'default' | 'error' | 'success';
  /**
   * 是否有錯誤狀態
   */
  error?: boolean;
  /**
   * 錯誤提示信息
   */
  errorMessage?: string;
  /**
   * 標籤文字
   */
  label?: string;
  /**
   * 是否為必填項
   */
  required?: boolean;
  /**
   * 輔助說明文字
   */
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    error = false, 
    errorMessage, 
    label, 
    required = false, 
    helperText, 
    id,
    ...props 
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    const baseStyles = [
      'flex w-full rounded-lg border px-3 py-2 text-sm placeholder:text-neutral-500',
      'transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    ];

    const variants = {
      default: [
        'border-neutral-300 bg-white focus:border-teal-500 focus:ring-teal-500',
        'hover:border-neutral-400',
      ],
      error: [
        'border-red-300 bg-red-50 text-red-900 placeholder:text-red-300',
        'focus:border-red-500 focus:ring-red-500',
      ],
      success: [
        'border-green-300 bg-green-50 text-green-900 placeholder:text-green-300',
        'focus:border-green-500 focus:ring-green-500',
      ],
    };

    const currentVariant = error ? 'error' : variant;

    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-neutral-700"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          id={inputId}
          className={cn(baseStyles, variants[currentVariant], className)}
          ref={ref}
          aria-invalid={error}
          aria-describedby={errorMessage ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        
        {errorMessage && (
          <p 
            id={`${inputId}-error`}
            className="text-sm text-red-600"
            role="alert"
          >
            {errorMessage}
          </p>
        )}
        
        {helperText && !errorMessage && (
          <p 
            id={`${inputId}-helper`}
            className="text-sm text-neutral-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };