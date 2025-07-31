import ProductCard from '~/components/ProductCard';
import Card from '~/components/ui/Card';
import SVGIcon from '~/components/ui/SVGIcon';
import ShopFilterModal from './shop/ShopFilterModal';
import type { productsTable } from '~/db/schema';
import { useEffect, useState } from 'react';
import StoreMap from './shop/StoreMap.client';
import IconButton from '~/components/ui/IconButton';
import { useSearchParams } from 'react-router';
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
    <Card className="mt-6">
      <div className="relative flex items-center justify-between gap-2">
        <Select
          className="shrink-0"
          items={[
            { label: 'All product', value: 'all' },
            { label: 'On Sale', value: 'onSale' },
            { label: 'Featured', value: 'featured' },
          ]}
          onValueChange={(value) => {
            if (value) {
              if (value == 'all') {
                searchParams.delete('tag');
              } else {
                searchParams.set('tag', value);
              }
              setSearchParams(searchParams, { preventScrollReset: true });
            }
          }}
          placeholder="All Product"
          value={searchParams.get('tag') || ''}
        />
        <SearchForm />
        <ShopFilterModal />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span>1-4 of {total} Results</span>
        <Select
          items={[
            { label: 'Sort by latest', value: 'latest' },
            { label: 'Sort by oldest', value: 'oldest' },
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
        <div className="z-0 h-[786px] w-5/12 bg-amber-100 stroke-0">{isClient && <StoreMap />}</div>
        <div className="grid w-7/12 shrink-0 grid-cols-2 gap-4">
          {products.length ? (
            products.map((item) => (
              <ProductCard
                image={item.image}
                isFeatured={item.featured}
                key={item.id}
                onSale={item.sale}
                price={item.price}
                salePrice={item.salePrice}
                title={item.name}
              />
            ))
          ) : (
            <h2 className="text-center text-3xl font-bold">No product found!</h2>
          )}
        </div>
      </div>
    </Card>
  );
}

function SearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  return (
    <div className="flex h-12 w-full basis-full rounded-md border border-gray-300">
      <input
        className="h-full w-full px-3 py-2 focus:outline-none"
        name="search"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Shop"
        type="search"
        value={searchQuery}
      />
      <IconButton
        className="h-full w-12"
        onClick={() => {
          if (searchQuery) {
            searchParams.set('search', searchQuery);
          } else {
            searchParams.delete('search');
          }
          setSearchParams(searchParams, { preventScrollReset: true });
        }}
        variant="ghost"
      >
        <SVGIcon className="size-7 bg-primary" src="/assets/icons/general/ic-search.svg" />
      </IconButton>
    </div>
  );
}
