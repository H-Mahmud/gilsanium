import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';

export default function AnalyticsCard() {
  return (
    <div className="w-full rounded-[10px] border border-card-border bg-sidebar-bg">
      <div className="space-y-3 rounded-[10px] bg-white px-3 py-2">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center justify-between gap-1">
              <SVGIcon
                className="size-4 bg-primary"
                src="/assets/icons/analytics/ic-money-bag.svg"
              />
              <span className="basis-full text-xs text-primary/80">Monthly Earnings</span>
            </div>
          </div>
          <IconButton className="size-4" variant="ghost">
            <SVGIcon className="size-4 bg-primary" src="/assets/icons/general/ic-dots.svg" />
          </IconButton>
        </div>
        <div className="flex items-center justify-start gap-2">
          <span className="text-2xl font-medium text-primary">$1,000</span>
          <span className="inline-flex h-fit items-center gap-0.5 rounded-sm bg-red-100 p-1 px-2 py-1 text-sm">
            <SVGIcon
              className="size-3 bg-red-500"
              src="/assets/icons/analytics/ic-graph-down.svg"
            />

            <span className="text-red-500">5.2%</span>
          </span>
        </div>
      </div>
      <p className="px-3 py-2 text-xs text-primary">
        Your earn extra <b>$5,990</b> this month
      </p>
    </div>
  );
}
