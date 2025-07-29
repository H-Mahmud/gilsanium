import { Button } from '~/components/ui/Button';
import Card from '~/components/ui/Card';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';
import { Dialog } from 'radix-ui';

export default function ShopFilterModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton className="size-12 shrink-0" variant="solid">
          <SVGIcon className="size-7 bg-white" src="/assets/icons/general/ic-filter.svg" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className="absolute top-[52px] right-0 z-10 flex flex-col gap-y-6 bg-white select-none">
        <Card>
          <p>Filter by:</p>
          <div className="flex items-center justify-between">
            <Button variant="ghost">Date Range</Button>
            <Button variant="ghost">Reset</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="date-from">From</label>
              <input id="date-from" type="date" />
            </div>
            <div>
              <label htmlFor="date-to">To</label>
              <input id="date-to" type="date" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="ghost">Today</Button>
            <Button variant="ghost">This Week</Button>
            <Button variant="ghost">This Month</Button>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Button variant="ghost">Amount</Button>
              <Button variant="ghost">Reset</Button>
            </div>
            <Button className="w-full" variant="ghost">
              Low to High (Lowest First){' '}
              <SVGIcon className="size-2.5" src="/assets/icons/general/ic-arrow-down.svg" />
            </Button>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Button variant="ghost">Price Range</Button>
              <Button variant="ghost">Reset</Button>
            </div>
            <input id="price-range" name="price-range" type="range" />
          </div>

          <div className="flex items-center justify-between">
            <Button className="bg-primary-contrast/5 text-primary-contrast">Reset All</Button>
            <Button className="bg-primary-contrast">Apply Filers (3)</Button>
          </div>
        </Card>
      </Dialog.Content>
    </Dialog.Root>
  );
}
