import { AnalyticalSummary } from '~/sections/analytical-summary';
import AnalyticalMonitoring from '~/sections/monitoring/AnalyticalMonitoring';
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
      <AnalyticalMonitoring />
      <div>
        <Shop />
      </div>
    </div>
  );
}
