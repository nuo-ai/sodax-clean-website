/**
 * 通用工具函數 (Utility Functions)
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合併 Tailwind CSS 類別
 * @param inputs - CSS 類別名稱
 * @returns 合併後的類別字符串
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}