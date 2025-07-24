import IconButton from '~/components/ui/IconButton';
import Logo from './Logo';
import SVGIcon from '~/components/ui/SVGIcon';
import SidebarMenus from './SidebarMenus';
import { navData } from '~/config-dashboard-menu';

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-sidebar-bg outline outline-card-border">
      <div className="flex h-20 items-center justify-between px-6">
        <Logo />
        <IconButton className="size-7" variant="outline">
          <SVGIcon className="size-4" src="/assets/icons/general/ic-sun.svg" />
        </IconButton>
      </div>
      <SidebarMenus navData={navData} />
    </aside>
  );
}
