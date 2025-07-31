import ProductCard from '~/components/ProductCard';
import { Button } from '~/components/ui/Button';
import Card from '~/components/ui/Card';
import SVGIcon from '~/components/ui/SVGIcon';
import ShopFilterModal from './shop/ShopFilterModal';
import type { productsTable } from '~/db/schema';
import { useEffect, useState } from 'react';
import StoreMap from './shop/StoreMap.client';
import IconButton from '~/components/ui/IconButton';
import { Form, useSearchParams } from 'react-router';
import Select from '~/components/ui/Select';

export default function Shop({
  products,
  total,
}: {
  products: (typeof productsTable.$inferSelect)[];
  total: number;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Card>
      <div className="relative flex items-center justify-between gap-2">
        <Button className="shrink-0" variant="outline">
          For Sale
          <SVGIcon className="ml-7 size-4" src="/assets/icons/general/ic-open.svg" />
        </Button>

        <Form
          className="flex h-12 w-full basis-full rounded-md border border-gray-300"
          method="get"
          preventScrollReset
        >
          <input
            className="h-full w-full px-3 py-2 focus:outline-none"
            defaultValue={searchParams.get('search') || ''}
            name="search"
            placeholder="Search Shop"
            type="text"
          />
          <IconButton className="h-full w-12" variant="ghost">
            <SVGIcon className="size-7 bg-primary" src="/assets/icons/general/ic-search.svg" />
          </IconButton>
        </Form>

        <ShopFilterModal />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span>1-8 of {total} Results</span>
        <Select
          items={[
            { label: 'Sort by latest', value: 'latest' },
            { label: 'Sort by popularity', value: 'popularity' },
          ]}
          onValueChange={(value) => {
            if (value) {
              searchParams.set('sortBy', value);
              setSearchParams(searchParams, { preventScrollReset: true });
            }
          }}
          placeholder="Default sort"
          value={searchParams.get('sortBy') || ''}
        />
      </div>

      <div className="mt-6 flex items-stretch justify-between gap-4">
        <div className="h-[786px] w-5/12 bg-amber-100 stroke-0">{isClient && <StoreMap />}</div>
        <div className="grid w-7/12 shrink-0 grid-cols-2 gap-4">
          {products.map((item) => (
            <ProductCard image={item.image} key={item.id} price={item.price} title={item.name} />
          ))}
        </div>
      </div>
    </Card>
  );
}
