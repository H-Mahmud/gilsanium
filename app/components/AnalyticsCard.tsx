import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';

export default function AnalyticsCard() {
  return (
    <div className="rounded-[10px] border border-card-border p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center justify-between gap-1">
            <IconButton variant="ghost">
              <SVGIcon className="size-4" src="/assets/icons/analytics/ic-money-bag.svg" />'
            </IconButton>
            <span>Monthly Earnings</span>
          </div>
        </div>
        <IconButton variant="ghost">
          <SVGIcon className="size-4" src="/assets/icons/general/ic-dots.svg" />
        </IconButton>
      </div>
      <div>
        <span className="text-[24px] font-medium">$1,000</span>
        <span className="inline-block h-fit bg-red-100 p-1 text-red-700">
          <SVGIcon className="size-3 bg-red-700" src="/assets/icons/analytics/ic-graph-down.svg" />
          5.2%
        </span>
      </div>
      <p>Your earn extra $5,990 this month</p>
    </div>
  );
}
