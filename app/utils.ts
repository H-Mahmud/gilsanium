import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  value: number,
  decimalLimit: number = 2,
  locale: string = 'en-US',
  currency: string = 'USD',
) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: decimalLimit,
    maximumFractionDigits: decimalLimit,
  }).format(value);
}
