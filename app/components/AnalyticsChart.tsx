import { Button } from './ui/Button';
import SVGIcon from './ui/SVGIcon';

export default function AnalyticsChart() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <SVGIcon src="/assets/icons/analytics/ic-signal.svg" />
          Sale Analytics
        </div>
        <div>
          <span>
            <span className="size-2 bg-[#B9CFF9]"></span>
            Refound
          </span>

          <span>
            <span className="size-2 bg-primary"></span>
            Checkout
          </span>
          <Button
            rightIcon={<SVGIcon src="/assets/icons/general/ic-arrow-down.svg" />}
            variant="outline"
          >
            This Month
          </Button>
        </div>
      </div>
    </div>
  );
}
