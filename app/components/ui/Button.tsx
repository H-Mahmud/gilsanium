import { cn } from '~/utils';

export type ButtonVariant = 'ghost' | 'outline' | 'solid';

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  variant = 'solid',
  className,
  leftIcon,
  rightIcon,
  children,
}: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg border border-card-border px-4 py-2 text-sm',
        variant === 'outline' && 'border border-icon-border text-primary',
        variant === 'solid' && 'bg-primary text-white',
        variant === 'ghost' && 'bg-transparent text-primary',
        className,
      )}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
