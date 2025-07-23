import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('dashboard', [
    layout('routes/dashboard/layout.tsx', [
      route('sales-overview', 'routes/dashboard/sales-overview.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
