declare module '@react-router/dev/vite' {
  import type { Plugin } from 'vite';
  export function reactRouter(): Plugin;
  const _default: { reactRouter: typeof reactRouter };
  export default _default;
}
