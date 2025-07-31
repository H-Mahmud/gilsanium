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

export function getDiscountPercentage(regularPrice: number, offerPrice: number) {
  if (regularPrice <= 0) return 0;
  const discount = ((regularPrice - offerPrice) / regularPrice) * 100;
  return Math.round(discount);
}
