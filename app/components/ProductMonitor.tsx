import SVGIcon from './ui/SVGIcon';
import { Button } from './ui/Button';

export default function ProductMonitor() {
  return (
    <div className="w-5/12">
      <div className="flex items-center justify-between">
        <div>
          <h3>
            <SVGIcon src="/assets/icons/analytics/ic-start-up.svg" /> Product Monitor
          </h3>
          <span>Popular Product</span>
        </div>
        <Button
          rightIcon={<SVGIcon src="/assets/icons/general/ic-arrow-down.svg" />}
          variant="outline"
        >
          Order
        </Button>
      </div>

      <div>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}

const ProductItem = () => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">1</span>
        <img alt="Product" className="h-12 w-12 rounded" src="/assets/images/product1.jpg" />
        <h4 className="text-lg font-semibold">Product Name</h4>
      </div>

      <span className="text-lg font-bold">$99.99</span>
    </div>
  );
};
