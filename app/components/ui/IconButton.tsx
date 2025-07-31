import type React from 'react';
import { cn } from '~/utils';

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'outline' | 'solid' | 'ghost';
  className?: string;
  children: React.ReactNode;
};

export default function IconButton({
  variant = 'solid',
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-lg p-2',
        variant === 'outline' && 'border border-icon-border',
        variant === 'solid' && 'bg-primary text-white',
        variant === 'ghost' && 'bg-transparent hover:bg-primary/10',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
