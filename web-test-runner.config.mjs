import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  files: '*.tests.js',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ ts: true }),
  ],
}
