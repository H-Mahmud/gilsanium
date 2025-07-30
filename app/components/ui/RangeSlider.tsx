import { cn } from '~/utils';
import { Slider as SliderPrimitive } from 'radix-ui';
import { useEffect, useState } from 'react';

type RangeSliderProps = {
  min: number;
  max: number;
  step?: number;
  values: [number, number];
  onChange: (values: [number, number]) => void;
  className?: string;
};

export default function RangeSlider({
  min,
  max,
  step = 1,
  values,
  onChange,
  className = '',
}: RangeSliderProps) {
  const [localValues, setLocalValues] = useState<[number, number]>(values);

  useEffect(() => {
    setLocalValues(values);
  }, [values]);

  const handleChange = (newValues: number[]) => {
    const [newMin, newMax] = newValues as [number, number];
    setLocalValues([newMin, newMax]);
    onChange([newMin, newMax]);
  };

  return (
    <div className="w-full">
      <SliderPrimitive.Root
        className={cn('relative flex w-full touch-none items-center select-none', className)}
        max={max}
        min={min}
        minStepsBetweenThumbs={1}
        onValueChange={handleChange}
        step={step}
        value={localValues}
      >
        <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-sidebar-bg">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        <SliderPrimitive.Thumb
          aria-label="Minimum value"
          className="block h-5 w-5 rounded-full border bg-primary shadow focus:outline-none"
        />
        <SliderPrimitive.Thumb
          aria-label="Maximum value"
          className="block h-5 w-5 rounded-full border bg-primary shadow focus:outline-none"
        />
      </SliderPrimitive.Root>
    </div>
  );
}
