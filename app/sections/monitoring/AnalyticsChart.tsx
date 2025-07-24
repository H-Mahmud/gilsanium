import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Button } from '~/components/ui/Button';
import SVGIcon from '~/components/ui/SVGIcon';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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
            <span className="mr-1 inline-block size-3 bg-[#B9CFF9]" />
            Refound
          </span>

          <span>
            <span className="mr-1 inline-block size-3 bg-primary-contrast" />
            Checkout
          </span>
          <Button className="ml-8 h-8" variant="outline">
            This Month
            <SVGIcon className="size-2 bg-primary" src="/assets/icons/general/ic-arrow-down.svg" />
          </Button>
        </div>
      </div>

      <div className="aspect-585/268 w-full">
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            data={data}
            height={300}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            width={500}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar activeBar={<Rectangle fill="pink" stroke="blue" />} dataKey="pv" fill="#8884d8" />
            <Bar
              activeBar={<Rectangle fill="gold" stroke="purple" />}
              dataKey="uv"
              fill="#82ca9d"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
