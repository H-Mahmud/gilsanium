import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import type { NavData, NavItem } from '~/config-dashboard-menu';
import { cn } from '~/utils';

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
                <SubMenu active={pathname === item.path} items={item} key={item.title} />
              ) : (
                <React.Fragment key={item.title}>
                  <NavLink className="!cursor-pointer" key={item.title} to={item.path}>
                    <MenuItem {...item} active={pathname === item.path} />
                  </NavLink>
                </React.Fragment>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn('inline-block text-xs font-medium text-primary/50 uppercase')}>
      {children}
    </span>
  );
}
type MenuItemProps = NavItem & {
  active?: boolean;
  className?: string;
  handleClick?: () => void;
  open?: boolean;
};

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
function MenuItem({
  icon,
  title,
  active,
  badge,
  className,
  children,
  handleClick,
  open,
}: MenuItemProps) {
  return (
    <button
      className={cn(
        'flex w-full cursor-pointer items-center justify-between rounded-xl border-card-border p-2 text-primary transition hover:bg-gray-100',
        active && 'bg-white',
        active && 'border',
        className,
      )}
      onClick={handleClick}
    >
      <div className="flex w-full items-center justify-between">
        <span className="inline-flex items-center justify-start gap-2">
          {icon} {title}
        </span>
        {children?.length && (
          <ChevronDown
            className={cn('ml-2 inline-block h-4 w-4 transition-transform', {
              'rotate-180': open,
            })}
          />
        )}
      </div>
      {badge && <span className="text-sm font-semibold text-primary/50">{badge()}</span>}
    </button>
  );
}

type SubMenuProps = {
  items: NavItem;
  active: boolean;
};
function SubMenu({ items, active }: SubMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <MenuItem {...items} active={active} handleClick={() => setOpen(!open)} open={open} />

      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="pl-6">
          {items.children!.map((item) => (
            <SubMenuItem key={item.title} path={item.path} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
