import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  files: '*.tests.ts',
  nodeResolve: true,
  plugins: [
    esbuildPlugin({ ts: true, tsconfig: './tsconfig.json' }),
  ],
}
