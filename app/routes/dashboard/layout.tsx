import { Outlet } from 'react-router';
import Header from '../../sections/Header';
import Sidebar from '~/sections/Sidebar';

export default function Layout() {
  return (
    <div className="flex min-h-screen items-stretch justify-stretch">
      <Sidebar />

      <div className="basis-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
