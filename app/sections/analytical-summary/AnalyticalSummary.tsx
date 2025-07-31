import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsCard from '~/components/AnalyticsCard';

export default function AnalyticalSummary() {
  return (
    <div className="mt-4 flex flex-col gap-5">
      <AnalyticsFilter />

      <div className="flex justify-between gap-3">
        <AnalyticsCard
          amount="$108,906"
          description={
            <>
              You earn extra <strong>$5,990</strong> this month
            </>
          }
          icon="money-bag"
          label="Monthly earning"
          percentage="5.2%"
          status="down"
        />
        <AnalyticsCard
          amount="+2,345"
          description={
            <>
              You Received <strong>180</strong> more orders this month
            </>
          }
          icon="shipment-star"
          label="Total Orders"
          percentage="8.2%"
          status="up"
        />
        <AnalyticsCard
          amount="$256,740"
          description={
            <>
              Sales revenue fell by <strong>$10,200</strong> this month
            </>
          }
          icon="shipment-bask"
          label="Total Sales"
          percentage="3.8%"
          status="down"
        />
        <AnalyticsCard
          amount="+1,230"
          description={
            <>
              Gained <strong>65</strong> new customers this month
            </>
          }
          icon="users"
          label="New Customers"
          percentage="5.7%"
          status="up"
        />
      </div>
    </div>
  );
}
