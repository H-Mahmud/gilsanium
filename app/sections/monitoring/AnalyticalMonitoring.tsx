import AnalyticsChart from './AnalyticsChart';
import ProductMonitor from './ProductMonitor';

export default function AnalyticalMonitoring() {
  return (
    <div className="mt-6 flex gap-3">
      <AnalyticsChart />
      <ProductMonitor />
    </div>
  );
}
