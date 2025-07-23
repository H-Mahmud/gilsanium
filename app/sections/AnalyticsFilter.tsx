import { Button } from '~/components/ui/Button';
import SVGIcon from '~/components/ui/SVGIcon';

export default function AnalyticsFilter() {
  return (
    <div className="my-4 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Button
          leftIcon={
            <SVGIcon
              className="size-6 bg-primary"
              src="/assets/icons/general/ic-calendar-edit.svg"
            />
          }
          rightIcon={
            <SVGIcon className="size-4 bg-primary" src="/assets/icons/general/ic-arrow-down.svg" />
          }
          variant="outline"
        >
          Month
        </Button>
        <div className="flex items-center gap-0.5">
          <Button variant="outline">01 March</Button>
          to
          <Button variant="outline">01 March</Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          leftIcon={<SVGIcon src="/assets/icons/analytics/ic-widget.svg" />}
          variant="outline"
        >
          Customize Widget
        </Button>
        <Button
          className="bg-primary-2"
          leftIcon={<SVGIcon src="/assets/icons/general/ic-download.svg" />}
          variant="solid"
        >
          Download
        </Button>
      </div>
    </div>
  );
}
