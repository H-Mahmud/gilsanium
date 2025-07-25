import { cn, formatCurrency } from '~/utils';
import IconButton from './ui/IconButton';
import SVGIcon from './ui/SVGIcon';

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  isFeatured?: boolean;
  location?: string;
  className?: string;
};
export default function ProductCard({
  image,
  isFeatured,
  title,
  price,
  location,
  className,
}: ProductCardProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-xl', className)}>
      <img alt="laptop" className="h-full w-full" src={image} />
      <div className="absolute top-5 right-5 flex items-center gap-1">
        {isFeatured && (
          <span className="inline-block rounded-full bg-primary p-3 py-1.5 text-xs font-semibold text-white uppercase">
            Featured
          </span>
        )}
        {location && (
          <IconButton className="size-7 rounded-full">
            <SVGIcon className="size-4 bg-white" src="/assets/icons/general/ic-location.svg" />
          </IconButton>
        )}
      </div>
      <div className="absolute bottom-0 flex w-full flex-col gap-1 bg-primary/70 px-4 py-5">
        <h3 className="text-base font-medium text-white">{title}</h3>
        <span className="text-2xl font-semibold text-white">{formatCurrency(price, 0)}</span>
      </div>
    </div>
  );
}
