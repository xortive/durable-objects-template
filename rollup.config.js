import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/index.mjs',
  output: {
    exports: 'named',
    format: 'es',
    file: 'dist/index.mjs',
    sourcemap: true,
  },

  // rollup won't copy slug.txt to dist/ for us, so we need to setup a copy ourselves
  // and declare it as an external dependency so it doesn't throw a warning. It'd
  // be nice to have a rollup plugin that detected non-js modules like this and
  // copied them for us.
  external: ['slug.txt'],
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    terser(),
    copy({
      targets: [{ src: './src/slug.txt', dest: './dist/' }],
    }),
  ],
}
