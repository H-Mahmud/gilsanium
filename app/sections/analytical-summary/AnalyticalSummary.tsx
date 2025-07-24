import AnalyticsFilter from '../AnalyticsFilter';
import AnalyticsCard from '~/sections/analytical-summary/AnalyticsCard';

export default function AnalyticalSummary() {
  return (
    <div className="mt-4 flex flex-col gap-5">
      <AnalyticsFilter />

      <div className="flex justify-between gap-3">
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
        <AnalyticsCard />
      </div>
    </div>
  );
}
