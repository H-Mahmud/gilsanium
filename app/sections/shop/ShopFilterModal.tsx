import { Button } from '~/components/ui/Button';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';
import { Dialog } from 'radix-ui';
import { cn } from '~/utils';
import { useSearchParams } from 'react-router';
import RangeSlider from '~/components/ui/RangeSlider';
import React, { useMemo, useState } from 'react';
import Select from '~/components/ui/Select';
import dayjs from 'dayjs';

export default function ShopFilterModal() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [dateFrom, setDateFrom] = useState(searchParams.get('dateFrom') || '');
  const [dateTo, setDateTo] = useState(searchParams.get('dateTo') || '');
  const [sort, setSort] = useState(searchParams.get('priceSort') || '');
  const [minPrice, setMinPrice] = useState(Number(searchParams.get('minPrice')) || 0);
  const [maxPrice, setMaxPrice] = useState(Number(searchParams.get('maxPrice')) || 10_000);

  const setToday = () => {
    const today = dayjs().format('YYYY-MM-DD');
    setDateFrom(today);
    setDateTo(today);
  };

  const setThisWeek = () => {
    const start = dayjs().startOf('week').format('YYYY-MM-DD');
    const end = dayjs().endOf('week').format('YYYY-MM-DD');
    setDateFrom(start);
    setDateTo(end);
  };

  const setThisMonth = () => {
    const start = dayjs().startOf('month').format('YYYY-MM-DD');
    const end = dayjs().endOf('month').format('YYYY-MM-DD');
    setDateFrom(start);
    setDateTo(end);
  };

  const resetDates = () => {
    setDateFrom('');
    setDateTo('');
  };

  const resetSort = () => setSort('');
  const resetPrices = () => {
    setMinPrice(0);
    setMaxPrice(1000);
  };

  const resetAll = () => {
    resetDates();
    resetSort();
    resetPrices();
  };

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (dateFrom || dateTo) count++;
    if (sort) count++;
    if (minPrice !== 0 || maxPrice !== 1000) count++;
    return count;
  }, [dateFrom, dateTo, sort, minPrice, maxPrice]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (dateFrom) params.set('dateFrom', dateFrom);
    if (dateTo) params.set('dateTo', dateTo);
    if (sort) params.set('priceSort', sort);
    if (minPrice !== 0) params.set('minPrice', minPrice.toString());
    if (maxPrice !== 1000) params.set('maxPrice', maxPrice.toString());
    setSearchParams(params);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <IconButton className="size-12 shrink-0" variant="solid">
          <SVGIcon className="size-7 bg-white" src="/assets/icons/general/ic-filter.svg" />
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className="absolute top-[52px] right-0 z-10 flex flex-col rounded-lg border border-card-border bg-white p-6 select-none">
        <p className="mb-6 text-sm font-medium text-app-gray">Filter by:</p>
        <div className="border-b border-[#ECEDF0] pb-4.5">
          <div className="mb-4.5 flex items-center justify-between">
            <SectionLabel>Date Range</SectionLabel>
            <SectionLabel className="cursor-pointer" onClick={resetDates}>
              Reset
            </SectionLabel>
          </div>
          <div className="mb-3 flex items-center justify-between gap-5">
            <div className="flex w-full flex-col gap-3">
              <label className="mb-3 text-sm font-medium text-app-gray" htmlFor="date-from">
                From
              </label>
              <TextInput
                id="date-from"
                onChange={(e) => setDateFrom(e.target.value)}
                type="date"
                value={dateFrom}
              />
            </div>
            <div className="flex w-full flex-col gap-3">
              <label className="mb-3 text-sm font-medium text-app-gray" htmlFor="date-to">
                To
              </label>
              <TextInput
                id="date-to"
                onChange={(e) => setDateTo(e.target.value)}
                type="date"
                value={dateTo}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button className="shrink-0 px-7 py-5 text-app-gray" onClick={setToday} variant="ghost">
              Today
            </Button>
            <Button
              className="shrink-0 px-7 py-5 text-app-gray"
              onClick={setThisWeek}
              variant="ghost"
            >
              This Week
            </Button>
            <Button
              className="shrink-0 px-7 py-5 text-app-gray"
              onClick={setThisMonth}
              variant="ghost"
            >
              This Month
            </Button>
          </div>
        </div>
        <div className="mt-6 border-b border-[#ECEDF0] pb-4.5">
          <div className="mb-4.5 flex items-center justify-between">
            <SectionLabel>Amount</SectionLabel>
            <SectionLabel className="cursor-pointer" onClick={resetSort}>
              Reset
            </SectionLabel>
          </div>
          <Select
            className="w-full justify-between"
            items={[
              { label: 'Low to Hight (Lowest First)', value: 'asc' },
              {
                label: 'High to Low (Highest First)',
                value: 'desc',
              },
            ]}
            onValueChange={(value) => {
              setSort(value);
            }}
            value={sort}
          />
        </div>

        <div className="mt-6 border-b border-[#ECEDF0] pb-4.5">
          <div className="mb-4.5 flex items-center justify-between">
            <SectionLabel>Price Range</SectionLabel>
            <SectionLabel className="cursor-pointer" onClick={resetPrices}>
              Reset
            </SectionLabel>
          </div>
          <RangeSlider
            max={10_000}
            min={0}
            onChange={(value) => {
              setMinPrice(value[0]);
              setMaxPrice(value[1]);
            }}
            values={[minPrice, maxPrice]}
          />
        </div>

        <div className="mt-6 flex items-center justify-between gap-x-4.5">
          <Button
            className="h-14 w-full bg-primary-contrast/5 text-primary-contrast"
            onClick={resetAll}
          >
            Reset All
          </Button>
          <Button className="h-14 w-full bg-primary-contrast" onClick={applyFilters}>
            Apply Filers {activeFilterCount ? <>({activeFilterCount})</> : null}
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
type SectionLabelProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
function SectionLabel({ children, className, ...rest }: SectionLabelProps) {
  return (
    <button className={cn('text-base font-semibold text-primary', className)} {...rest}>
      {children}
    </button>
  );
}

function TextInput({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={cn(
        'block w-full rounded-xl border border-[#ecedf0] p-4 text-sm font-semibold text-app-gray',
        className,
      )}
    />
  );
}
