import { useLoaderData } from 'react-router';
import db from '~/db';
import { productsTable } from '~/db/schema';
import { AnalyticalSummary } from '~/sections/analytical-summary';
import AnalyticalMonitoring from '~/sections/monitoring/AnalyticalMonitoring';
import Shop from '~/sections/Shop';
import type { Route } from './+types/sales-overview';
import { and, ilike } from 'drizzle-orm';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  const conditions = [ilike(productsTable.name, `%${search}%`)];

  const total = await db.$count(productsTable, ...conditions);

  const results = await db
    .select()
    .from(productsTable)
    .where(and(...conditions))
    .limit(4);

  return { products: results, total };
}

export function meta() {
  return [
    { title: 'Gilsanium | Sales Overview' },
    { name: 'description', content: 'Welcome to Sales Overview!' },
  ];
}

export default function SalesOverview() {
  const { products, total } = useLoaderData<typeof loader>();
  return (
    <div>
      <AnalyticalSummary />
      <AnalyticalMonitoring />
      <div>
        <Shop products={products} total={total} />
      </div>
    </div>
  );
}
