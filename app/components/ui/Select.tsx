import { Select as RadixSelect } from 'radix-ui';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '~/utils';

export type SelectItem = {
  value: string;
  label: string;
};

type SelectProps = {
  items: SelectItem[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function Select({
  items,
  value,
  onValueChange,
  placeholder = 'Select an option',
  className = '',
}: SelectProps) {
  return (
    <RadixSelect.Root onValueChange={onValueChange} value={value}>
      <RadixSelect.Trigger
        className={cn(
          'inline-flex h-12 items-center justify-between gap-2 rounded-lg border border-icon-border p-4 text-sm transition focus:outline-none',
          className,
        )}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDown className="h-4 w-4 text-primary" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="animate-in fade-in z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-md border border-card-border bg-white shadow-lg"
          position="popper"
        >
          <RadixSelect.ScrollUpButton className="flex items-center justify-center p-2">
            <ChevronUp className="h-2 w-2" />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="p-1">
            {items.map((item) => (
              <RadixSelect.Item
                className="relative flex cursor-pointer items-center rounded-sm px-3 py-2 text-sm text-primary select-none hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                key={item.value}
                value={item.value}
              >
                <RadixSelect.ItemText>{item.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator className="absolute right-2 inline-flex items-center">
                  <Check className="h-4 w-4 text-primary-contrast" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="flex items-center justify-center p-2">
            <ChevronDown className="h-4 w-4" />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
