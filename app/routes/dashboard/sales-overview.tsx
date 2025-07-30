import { useLoaderData } from 'react-router';
import db from '~/db';
import { productsTable } from '~/db/schema';
import { AnalyticalSummary } from '~/sections/analytical-summary';
import AnalyticalMonitoring from '~/sections/monitoring/AnalyticalMonitoring';
import Shop from '~/sections/Shop';
import type { Route } from './+types/sales-overview';
import { and, asc, between, desc, ilike } from 'drizzle-orm';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search') || '';

  const range = url.searchParams.get('priceRange')?.split(',');

  const priceRange: [number, number] = range
    ? [parseInt(range[0]), parseInt(range[1])]
    : [1, 100_000];

  const dateFrom = url.searchParams.get('dateFrom');
  const dateTo = url.searchParams.get('dateTo');
  const order = url.searchParams.get('order') || 'asc';
  // const orderBy = url.searchParams.get('orderBy') || productsTable.name;

  const conditions = [
    ilike(productsTable.name, `%${search}%`),
    between(productsTable.price, priceRange[0], priceRange[1]),
  ];

  if (dateFrom && dateTo) {
    conditions.push(between(productsTable.createdAt, new Date(dateFrom), new Date(dateTo)));
  }

  const total = await db.$count(productsTable, ...conditions);

  const results = await db
    .select()
    .from(productsTable)
    .where(and(...conditions))
    .orderBy(order === 'asc' ? asc(productsTable) : desc(productsTable.name))
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
