import { Button } from '~/components/ui/Button';
import IconButton from '~/components/ui/IconButton';
import SVGIcon from '~/components/ui/SVGIcon';

export default function Shop() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button rightIcon={<SVGIcon src="/assets/icons/general/ic-open.svg" />} variant="outline">
          For Sale
        </Button>
        <input
          className="w-full max-w-[300px] rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Search for products..."
          type="text"
        />
        <IconButton>
          <SVGIcon src="/assets/icons/general/ic-search.svg" />
        </IconButton>
        <IconButton>
          <SVGIcon src="/assets/icons/general/ic-filter.svg" />
        </IconButton>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <span>1-8 of 8 Results</span>
        <Button rightIcon={<SVGIcon src="/assets/icons/general/ic-open.svg" />} variant="outline">
          Default sort
        </Button>
      </div>

      <div className="mt-2 flex items-stretch justify-between gap-2">
        <div>Map</div>
        <div>
          <div>
            <img src="/assets/images/products/laptop.png" />
            <div>
              <span>Featured</span>
              <IconButton>
                <SVGIcon src="/assets/icons/general/ic-location.svg" />
              </IconButton>
            </div>
            <div>
              <span>Laptop</span>
              <h4>$1,240</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
