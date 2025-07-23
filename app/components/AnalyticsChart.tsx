import { Button } from './ui/Button';
import SVGIcon from './ui/SVGIcon';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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
    <div>
      <div className="flex items-center justify-between">
        <div>
          <SVGIcon src="/assets/icons/analytics/ic-signal.svg" />
          Sale Analytics
        </div>
        <div>
          <span>
            <span className="size-2 bg-[#B9CFF9]"></span>
            Refound
          </span>

          <span>
            <span className="size-2 bg-primary"></span>
            Checkout
          </span>
          <Button
            rightIcon={<SVGIcon src="/assets/icons/general/ic-arrow-down.svg" />}
            variant="outline"
          >
            This Month
          </Button>
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer height="100%" width="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" stackId="a" />
            <Bar dataKey="uv" fill="#82ca9d" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
