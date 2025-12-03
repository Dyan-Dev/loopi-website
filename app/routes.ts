import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('open-source', 'routes/open-source.tsx'),
  route('downloads', 'routes/downloads.tsx'),
  route('about', 'routes/about.tsx'),
  route('privacy', 'routes/privacy.tsx'),
  route('terms', 'routes/terms.tsx'),
  route('docs/*', 'docs/page.tsx'),
  route('api/search', 'docs/search.ts'),
  route('*', 'routes/notfound.tsx'),
] satisfies RouteConfig;
