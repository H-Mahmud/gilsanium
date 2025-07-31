import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '~/components/ui/Button';
import SVGIcon from '~/components/ui/SVGIcon';

const data = [
  { name: 'Jan', Checkout: 3400, Refound: 1200 },
  { name: 'Feb', Checkout: 1900, Refound: 500 },
  { name: 'Mar', Checkout: 2800, Refound: 1000 },
  { name: 'Apr', Checkout: 2000, Refound: 600 },
  { name: 'May', Checkout: 1700, Refound: 1100 },
  { name: 'Jun', Checkout: 1300, Refound: 200 },
];

export default function AnalyticsChart() {
  return (
    <div className="flex w-7/12 flex-col justify-between rounded-[10px] border border-card-border p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-x-1.5 text-primary/80">
          <SVGIcon className="size-4 bg-primary/80" src="/assets/icons/analytics/ic-signal.svg" />
          Sale Analytics
        </span>
        <div className="inline-flex items-center gap-x-4 text-sm text-primary/80">
          <span>
            <span className="mr-1 inline-block size-3 rounded-full bg-[#B9CFF9]" />
            Refound
          </span>
          <span>
            <span className="mr-1 inline-block size-3 rounded-full bg-[#414ff4]" />
            Checkout
          </span>
          <Button className="ml-8 h-8" variant="outline">
            This Year
            <SVGIcon className="size-2 bg-primary" src="/assets/icons/general/ic-arrow-down.svg" />
          </Button>
        </div>
      </div>

      <div className="aspect-585/330 w-full">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart data={data} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 3500]} tickCount={6} />
            <Tooltip />
            <Bar dataKey="Checkout" fill="#414ff4" name="Checkout" radius={[20, 20, 20, 20]} />
            <Bar dataKey="Refound" fill="#B9CFF9" name="Refound" radius={[20, 20, 20, 20]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
