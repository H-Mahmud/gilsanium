import { Link } from 'react-router';
import { Button } from '~/components/ui/Button';
import type { Route } from './+types/home';
import { main } from '~/db/seed';

export function meta() {
  return [{ title: 'Gilsanium | Home' }, { name: 'description', content: 'Welcome to Gilsanium!' }];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  if (formData.get('seed') == 'yes') {
    main();
  }
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <Link to="/dashboard/sales-overview">
        <Button>Sales Overview Dashboard</Button>
      </Link>
    </div>
  );
}
