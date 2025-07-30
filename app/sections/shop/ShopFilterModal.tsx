import { Button } from '~/components/ui/Button';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';
import { Dialog } from 'radix-ui';
import { cn } from '~/utils';
import { Form, useSearchParams } from 'react-router';

export default function ShopFilterModal() {
  const [searchParams] = useSearchParams();
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton className="size-12 shrink-0" variant="solid">
          <SVGIcon className="size-7 bg-white" src="/assets/icons/general/ic-filter.svg" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className="absolute top-[52px] right-0 z-10 flex flex-col gap-y-6 rounded-lg border border-card-border bg-white p-6 select-none">
        <Form method="get" preventScrollReset>
          <p className="mb-6 text-sm font-medium text-app-gray">Filter by:</p>
          <div className="border-b border-[#ECEDF0] pb-4">
            <div className="mb-4 flex items-center justify-between">
              <SectionLabel>Date Range</SectionLabel>
              <SectionLabel>Reset</SectionLabel>
            </div>
            <div className="mb-3 flex items-center justify-between gap-5">
              <div className="flex flex-col gap-3">
                <InputLabel htmlFor="date-from">From</InputLabel>
                <TextInput
                  defaultValue={searchParams.get('dateFrom') || ''}
                  id="date-from"
                  name="dateFrom"
                  type="date"
                />
              </div>
              <div className="flex flex-col gap-3">
                <InputLabel htmlFor="date-to">To</InputLabel>
                <TextInput
                  defaultValue={searchParams.get('dateTo') || ''}
                  id="date-to"
                  name="dateTo"
                  type="date"
                />
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <Button className="shrink-0 px-7 py-5 text-app-gray" variant="ghost">
                Today
              </Button>
              <Button className="shrink-0 px-7 py-5 text-app-gray" variant="ghost">
                This Week
              </Button>
              <Button className="shrink-0 px-7 py-5 text-app-gray" variant="ghost">
                This Month
              </Button>
            </div>
          </div>
          <div className="mt-6 border-b border-[#ECEDF0] pb-4">
            <div className="mb-4 flex items-center justify-between">
              <SectionLabel>Amount</SectionLabel>
              <SectionLabel>Reset</SectionLabel>
            </div>
            <Button className="w-full justify-between" variant="ghost">
              Low to High (Lowest First){' '}
              <SVGIcon className="size-2.5" src="/assets/icons/general/ic-arrow-down.svg" />
            </Button>
          </div>

          <div className="mt-6 border-b border-[#ECEDF0] pb-4">
            <div className="flex items-center justify-between">
              <SectionLabel>Price Range</SectionLabel>
              <SectionLabel>Reset</SectionLabel>
            </div>
            <TextInput className="w-full" id="price-range" name="price-range" type="range" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button className="bg-primary-contrast/5 text-primary-contrast">Reset All</Button>
            <Button className="bg-primary-contrast">Apply Filers (3)</Button>
          </div>
        </Form>
      </Dialog.Content>
    </Dialog.Root>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-base font-semibold text-primary">{children}</p>;
}

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
};

function InputLabel({ children, className, ...rest }: LabelProps) {
  return (
    <label {...rest} className={cn('text-sm font-medium text-app-gray', className)}>
      {children}
    </label>
  );
}

function TextInput({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={cn(
        'rounded-xl border border-[#ecedf0] p-4 text-sm font-semibold text-app-gray',
        className,
      )}
    />
  );
}
