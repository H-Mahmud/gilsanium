import type React from 'react';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';
import { cn } from '~/utils';

type AnalyticsCardProps = {
  icon: string;
  label: string;
  amount: string;
  percentage: string;
  status: 'up' | 'down';
  description: React.ReactNode;
};
export default function AnalyticsCard({
  icon,
  label,
  amount,
  percentage,
  status,
  description,
}: AnalyticsCardProps) {
  return (
    <div className="w-full rounded-[10px] border border-card-border bg-sidebar-bg">
      <div className="space-y-3 rounded-[10px] bg-white px-3 py-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center justify-between gap-1">
              <SVGIcon
                className="size-4 bg-primary"
                src={`/assets/icons/analytics/ic-${icon}.svg`}
              />
              <span className="basis-full text-xs text-primary/80">{label}</span>
            </div>
          </div>
          <IconButton className="size-4" variant="ghost">
            <SVGIcon className="size-4 bg-primary" src="/assets/icons/general/ic-dots.svg" />
          </IconButton>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="text-2xl font-medium text-primary">{amount}</span>
          <span
            className={cn(
              'inline-flex h-fit items-center gap-0.5 rounded-sm bg-green-100 p-1 px-2 py-1 text-sm',
              status === 'down' && 'bg-red-100',
            )}
          >
            <SVGIcon
              className={cn('size-3 bg-green-500', status === 'down' && 'bg-red-500')}
              src={`/assets/icons/analytics/ic-graph-${(status === 'down' && 'down') || 'up'}.svg`}
            />
            <span className={cn('text-red-500', status === 'up' && 'text-green-500')}>
              {percentage}
            </span>
          </span>
        </div>
      </div>
      <p className="px-3 py-2 text-xs text-primary">{description}</p>
    </div>
  );
}
