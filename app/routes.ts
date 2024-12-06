import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/sign/sign-in', 'routes/sign/sign-in.tsx'),
] satisfies RouteConfig;
