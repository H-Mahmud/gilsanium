import { Button } from '~/components/ui/Button';
import Card from '~/components/ui/Card';
import SVGIcon from '~/components/ui/SVGIcon';
import { cn } from '~/utils';

type ProductMonitoringItem = {
  id: number;
  name: string;
  orderCount: number;
  image: string;
};
const productData: ProductMonitoringItem[] = [
  {
    id: 1,
    name: 'Smartwatch',
    orderCount: 1500,
    image: '/assets/images/products/01-thumbnail.png',
  },
  {
    id: 2,
    name: 'Speaker',
    orderCount: 900,
    image: '/assets/images/products/01-thumbnail.png',
  },
  {
    id: 3,
    name: 'Drone',
    orderCount: 900,
    image: '/assets/images/products/03-thumbnail.png',
  },
  {
    id: 4,
    name: 'Headphone',
    orderCount: 10,
    image: '/assets/images/products/04-thumbnail.png',
  },
];

export default function ProductMonitor() {
  return (
    <Card className="w-5/12">
      <div className="mb-4 flex items-center justify-between">
        <div className="space-y-0.5 text-primary/80">
          <h4 className="flex items-center gap-x-1.5">
            <SVGIcon className="size-4 bg-primary/80" src="/assets/icons/analytics/ic-signal.svg" />
            Product Monitoring
          </h4>
          <p className="text-xs text-primary/50">Popular Product</p>
        </div>

        <Button className="ml-8 h-8" variant="outline">
          Order
          <SVGIcon className="size-2 bg-primary" src="/assets/icons/general/ic-arrow-down.svg" />
        </Button>
      </div>

      <div>
        {productData.map((item) => (
          <ProductMonitoringItem key={item.id} {...item} active={item.id === 1} />
        ))}
        <p className="block cursor-pointer pt-5 text-center text-xs text-primary/50 underline">
          View all Details
        </p>
      </div>
    </Card>
  );
}

const ProductMonitoringItem = ({
  id,
  image,
  name,
  orderCount,
  active,
}: ProductMonitoringItem & { active?: boolean }) => {
  return (
    <div
      className={cn(
        'py-2.h-5 flex items-center justify-between border-b border-icon-border py-4 pr-4 duration-200 ease-in-out',
        active && 'rounded-lg border-transparent bg-primary-contrast/5',
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn('h-7 w-1 rounded-tr-sm rounded-br-sm', active && 'bg-primary-contrast')}
        />
        <span className="inline-flex size-9 items-center justify-center text-sm font-medium">
          {id}
        </span>
        <img alt="Product" className="size-10 rounded-md" src={image} />

        <h4 className="text-sm font-medium">{name}</h4>
      </div>
      <span className="text-xs font-semibold text-primary-contrast">{orderCount} Orders</span>
    </div>
  );
};
