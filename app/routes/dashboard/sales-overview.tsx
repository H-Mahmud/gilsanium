import { useLoaderData } from 'react-router';
import db from '~/db';
import { productsTable } from '~/db/schema';
import { AnalyticalSummary } from '~/sections/analytical-summary';
import AnalyticalMonitoring from '~/sections/monitoring/AnalyticalMonitoring';
import Shop from '~/sections/Shop';
import type { Route } from './+types/sales-overview';
import { and, asc, between, desc, eq, ilike, type SQL } from 'drizzle-orm';

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const params = url.searchParams;

  const filters = [];

  const search = params.get('search');
  const minPrice = params.get('minPrice');
  const maxPrice = params.get('maxPrice');
  const dateFrom = params.get('dateFrom');
  const dateTo = params.get('dateTo');
  const tag = params.get('tag');
  const sortBy = params.get('sortBy');
  const orderByPrice = params.get('orderByPrice');
  const offset = parseInt(params.get('offset') || '0');
  const limit = 4;

  if (search) filters.push(ilike(productsTable.name, `%${search}%`));

  if (minPrice && maxPrice) {
    filters.push(between(productsTable.price, minPrice, maxPrice));
  }

  if (dateFrom && dateTo) {
    filters.push(between(productsTable.createdAt, new Date(dateFrom), new Date(dateTo)));
  }

  if (tag === 'featured') filters.push(eq(productsTable.featured, true));
  if (tag === 'onSale') filters.push(eq(productsTable.sale, true));

  const orderFields: SQL<unknown>[] = [];

  if (orderByPrice) {
    if (orderByPrice === 'asc') {
      orderFields.push(asc(productsTable.price));
    } else if (orderByPrice === 'desc') {
      orderFields.push(desc(productsTable.price));
    }
  }
  if (sortBy) {
    if (sortBy === 'latest') {
      orderFields.push(asc(productsTable.createdAt));
    } else if (sortBy === 'oldest') {
      orderFields.push(desc(productsTable.createdAt));
    }
  }

  const whereClause = filters.length ? and(...filters) : undefined;

  const total = await db.$count(productsTable, whereClause);

  const query = db.select().from(productsTable).where(whereClause).limit(limit).offset(offset);

  if (orderFields.length) {
    query.orderBy(...orderFields);
  }

  const result = await query;

  return { products: result, total: total };
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
