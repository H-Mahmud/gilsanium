import { cn } from '~/utils';

type SVGIconProps = {
  src: string;
  className?: string;
};

export default function SVGIcon({ src, className, ...other }: SVGIconProps) {
  return (
    <span
      className={cn(
        'inline-flex size-6 shrink-0 bg-current mask-contain mask-no-repeat',
        className,
      )}
      style={{
        maskImage: `url(${src})`,
      }}
      {...other}
    />
  );
}
