import ProductCard from '~/components/ProductCard';
import { Button } from '~/components/ui/Button';
import Card from '~/components/ui/Card';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';
import StoreMap from './shop/StoreMap.client';
import { useState } from 'react';

export default function Shop() {
  const [isClient, setIsClient] = useState(false);
  useState(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  return (
    <Card>
      <div className="flex items-center justify-between gap-2">
        <Button className="shrink-0" variant="outline">
          For Sale
          <SVGIcon className="ml-7 size-4" src="/assets/icons/general/ic-open.svg" />
        </Button>
        <div className="flex h-12 w-full basis-full rounded-md border border-gray-300">
          <input
            className="h-full w-full px-3 py-2 focus:outline-none"
            placeholder="Search Shop"
            type="text"
          />
          <IconButton className="h-full w-12" variant="ghost">
            <SVGIcon className="size-7 bg-primary" src="/assets/icons/general/ic-search.svg" />
          </IconButton>
        </div>
        <IconButton className="size-12 shrink-0" variant="solid">
          <SVGIcon className="size-7 bg-white" src="/assets/icons/general/ic-filter.svg" />
        </IconButton>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span>1-8 of 8 Results</span>
        <Button variant="outline">
          Default sort
          <SVGIcon className="size-4 bg-primary" src="/assets/icons/general/ic-open.svg" />
        </Button>
      </div>

      <div className="mt-6 flex items-stretch justify-between gap-4">
        <div className="h-[786px] w-5/12 bg-amber-100">{isClient && <StoreMap />}</div>
        <div className="grid grid-cols-2 gap-4">
          <ProductCard
            image="/assets/images/products/laptop.png"
            isFeatured={true}
            location="bc"
            price={10555}
            title="Laptop"
          />
          <ProductCard
            image="/assets/images/products/laptop.png"
            isFeatured={true}
            location="bc"
            price={10555}
            title="Laptop"
          />
          <ProductCard
            image="/assets/images/products/laptop.png"
            isFeatured={true}
            location="bc"
            price={10555}
            title="Laptop"
          />
          <ProductCard
            image="/assets/images/products/laptop.png"
            isFeatured={true}
            location="bc"
            price={10555}
            title="Laptop"
          />
        </div>
      </div>
    </Card>
  );
}
