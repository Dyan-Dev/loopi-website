import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root';
import Home from '../pages/Home';
import OpenSource from '../pages/OpenSource';
import Docs from '../pages/Docs';
import Downloads from '../pages/Downloads';
import About from '../pages/About';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'open-source', Component: OpenSource },
      { path: 'docs', Component: Docs },
      { path: 'downloads', Component: Downloads },
      { path: 'about', Component: About },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
]);
