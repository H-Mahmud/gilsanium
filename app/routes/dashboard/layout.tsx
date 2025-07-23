import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="flex items-stretch justify-stretch">
      <aside className="w-[260px]">Sidebar</aside>
      <div>
        <header className="h-[80px]">Header</header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
