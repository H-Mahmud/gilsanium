import { NavLink, useLocation } from 'react-router';
import type { NavData, NavItem } from '~/config-dashboard-menu';
import { cn } from '~/utils';

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn('inline-block text-xs font-medium text-primary/50 uppercase')}>
      {children}
    </span>
  );
}

function MenuItem({ icon, title, active, badge }: NavItem & { active?: boolean }) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-between rounded-xl border-card-border p-2 text-primary',
        active && 'bg-white',
        active && 'border',
      )}
    >
      <div className="flex items-center justify-start gap-2">
        {icon}
        <span>{title}</span>
      </div>
      {badge && <span className="text-sm font-semibold text-primary/50">{badge()}</span>}
    </button>
  );
}

function SubMenuItem({ title, path }: { title: string; path: string }) {
  return (
    <li className="submenu-item pl-4">
      <NavLink
        className={({ isActive }) =>
          cn('text-sm font-light text-primary/40', isActive && 'text-primary/60')
        }
        to={path}
      >
        {title}
      </NavLink>
    </li>
  );
}

export default function SidebarMenus({ navData }: { navData: NavData[] }) {
  const { pathname } = useLocation();
  return (
    <div className="basis-full px-6">
      {navData.map((group) => (
        <div className="pb-6" key={group.subheader}>
          <GroupLabel>{group.subheader}</GroupLabel>
          <ul className="pt-3">
            {group.items.map((item) =>
              item.children ? (
                <div key={item.title}>
                  <MenuItem {...item} active={pathname === item.path} />

                  <ul className="submenu mx-4">
                    {item.children.map(({ title, path }) => (
                      <SubMenuItem key={title} path={path} title={title} />
                    ))}
                  </ul>
                </div>
              ) : (
                <>
                  <NavLink className="!cursor-pointer" key={item.title} to={item.path}>
                    <MenuItem {...item} active={pathname === item.path} />
                  </NavLink>
                </>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
