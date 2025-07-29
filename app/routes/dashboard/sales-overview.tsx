import { useLoaderData } from 'react-router';
import db from '~/db';
import { productsTable } from '~/db/schema';
import { AnalyticalSummary } from '~/sections/analytical-summary';
import AnalyticalMonitoring from '~/sections/monitoring/AnalyticalMonitoring';
import Shop from '~/sections/Shop';

export async function loader() {
  return db.select().from(productsTable).limit(4);
}

export function meta() {
  return [
    { title: 'Gilsanium | Sales Overview' },
    { name: 'description', content: 'Welcome to Sales Overview!' },
  ];
}

export default function SalesOverview() {
  const products = useLoaderData<typeof loader>();
  return (
    <div>
      <AnalyticalSummary />
      <AnalyticalMonitoring />
      <div>
        <Shop products={products} />
      </div>
    </div>
  );
}
