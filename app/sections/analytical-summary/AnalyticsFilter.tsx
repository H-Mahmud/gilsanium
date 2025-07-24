import { Button } from '~/components/ui/Button';
import SVGIcon from '~/components/ui/SVGIcon';
import { cn } from '~/utils';

export default function AnalyticsFilter({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-between', className)}>
      <div className="flex items-center gap-5">
        <Button variant="outline">
          <SVGIcon className="size-6 bg-primary" src="/assets/icons/general/ic-calendar-edit.svg" />
          Month
          <SVGIcon className="size-4 bg-primary" src="/assets/icons/general/ic-arrow-down.svg" />
        </Button>
        <div className="flex items-center gap-2">
          <Button className="text-base" variant="outline">
            01 March
          </Button>
          <span className="text-primary">to</span>
          <Button className="text-base" variant="outline">
            01 March
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Button variant="outline">
          <SVGIcon className="size-6 text-primary/80" src="/assets/icons/analytics/ic-widget.svg" />
          Customize Widget
        </Button>
        <Button className="bg-primary-contrast" variant="solid">
          <SVGIcon className="size-6" src="/assets/icons/general/ic-download.svg" />
          Download
        </Button>
      </div>
    </div>
  );
}
