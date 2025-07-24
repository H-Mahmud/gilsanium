import type { JSX } from 'react';
import SVGIcon from './components/ui/SVGIcon';
import paths from './paths';

const icon = (name: string) => (
  <SVGIcon className="size-4 bg-primary p-1" src={`/assets/icons/navbar/ic-${name}.svg`} />
);

type Children = {
  title: string;
  path: string;
};

export type NavItem = {
  title: string;
  path: string;
  icon: JSX.Element;
  children?: Children[];
  badge?: () => string;
};

export type NavData = {
  subheader: string;
  items: NavItem[];
};

export const navData: NavData[] = [
  /**
   * Overview
   */
  {
    subheader: 'General Menu',
    items: [
      { title: 'Overview', path: paths.dashboard.overview, icon: icon('overview') },
      {
        title: 'Profile',
        path: paths.dashboard.profile,
        icon: icon('profile'),
      },
      {
        title: 'Product',
        path: paths.dashboard.product.root,
        icon: icon('product'),
        children: [
          { title: 'Smartwatch', path: paths.dashboard.product.smartwatch },
          { title: 'Drone', path: paths.dashboard.product.drone },
          { title: 'Speaker', path: paths.dashboard.product.speaker },
          { title: 'Chargers', path: paths.dashboard.product.chargers },
        ],
      },
      {
        title: 'Customers',
        path: paths.dashboard.customers.root,
        icon: icon('customers'),
        children: [
          { title: 'List', path: paths.dashboard.customers.list },
          { title: 'Create', path: paths.dashboard.customers.new },
          { title: 'Edit', path: paths.dashboard.customers.edit },
          { title: 'Account', path: paths.dashboard.customers.account },
        ],
      },
      {
        title: 'Message',
        path: paths.dashboard.message,
        icon: icon('message'),
        badge: () => {
          return '20';
        },
      },
    ],
  },
  /**
   * Account
   */
  {
    subheader: 'Account',
    items: [
      { title: 'Settings', path: paths.dashboard.settings, icon: icon('settings') },
      {
        title: 'Help',
        path: paths.dashboard.help,
        icon: icon('help'),
      },
      {
        title: 'Log Out',
        path: paths.logout,
        icon: icon('logout'),
      },
    ],
  },
];
