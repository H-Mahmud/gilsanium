import { Outlet } from 'react-router';
import Header from '../../sections/Header';

export default function Layout() {
  return (
    <div className="flex items-stretch justify-stretch">
      <aside className="w-[260px]">Sidebar</aside>
      <div className="basis-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
