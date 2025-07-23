import AnalyticsCard from '~/components/AnalyticsCard';
import AnalyticsFilter from '~/sections/AnalyticsFilter';

export function meta() {
  return [
    { title: 'Gilsanium | Sales Overview' },
    { name: 'description', content: 'Welcome to Sales Overview!' },
  ];
}

export default function SalesOverview() {
  return (
    <div>
      <AnalyticsFilter />

      <div className="flex gap-3">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
}
