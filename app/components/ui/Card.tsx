import { cn } from '~/utils';

export default function Card({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn('rounded-[10px] border border-card-border p-4', className)}>{children}</div>
  );
}
