import IconButton from '~/components/ui/IconButton';
import Logo from './Logo';
import SVGIcon from '~/components/ui/SVGIcon';
import SidebarMenus from './SidebarMenus';
import { navData } from '~/config-dashboard-menu';
import ActiveSuperCard from '~/sections/sidebar/ActiveSuperCard';

export default function Sidebar() {
  return (
    <aside className="scrollbar-hide sticky top-0 flex h-screen w-[260px] shrink-0 flex-col justify-between overflow-y-scroll scroll-smooth bg-sidebar-bg outline outline-card-border">
      <div className="flex h-20 shrink-0 items-center justify-between px-6">
        <Logo />
        <IconButton className="size-7" variant="outline">
          <SVGIcon className="size-4" src="/assets/icons/general/ic-sun.svg" />
        </IconButton>
      </div>
      <SidebarMenus navData={navData} />
      <ActiveSuperCard />
    </aside>
  );
}
