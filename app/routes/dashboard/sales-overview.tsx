import AnalyticsChart from '~/components/AnalyticsChart';
import ProductMonitor from '~/components/ProductMonitor';
import { AnalyticalSummary } from '~/sections/analytical-summary';
import Shop from '~/sections/Shop';

export function meta() {
  return [
    { title: 'Gilsanium | Sales Overview' },
    { name: 'description', content: 'Welcome to Sales Overview!' },
  ];
}

export default function SalesOverview() {
  return (
    <div>
      <AnalyticalSummary />
      <div className="mt-6 flex gap-3">
        <AnalyticsChart />
        <ProductMonitor />
      </div>
      <div>
        <Shop />
      </div>
    </div>
  );
}
