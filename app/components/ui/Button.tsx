import { cn } from '~/utils';

export type ButtonVariant = 'ghost' | 'outline' | 'solid';

export interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
}

export function Button({
  variant = 'solid',
  className,
  children,
  ...rest
}: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={cn(
        'inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-card-border p-4 text-sm',
        variant === 'outline' && 'border border-icon-border text-primary',
        variant === 'solid' && 'bg-primary text-white',
        variant === 'ghost' && 'bg-transparent text-primary',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
