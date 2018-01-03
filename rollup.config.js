import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.ts',
  plugins: [
    typescript({
      verbosity: 2,
      clean: true
    }),
    resolve()
  ],
  output: [
    {
      file: 'dist/iife/bundle.js',
      format: 'iife',
      name: 'MyApp',
      sourcemap: true
    },
    {
      file: 'dist/amd/bundle.js',
      format: 'amd',
      name: 'MyApp',
      sourcemap: true
    },
    {
      file: 'dist/umd/bundle.js',
      format: 'umd',
      name: 'MyApp',
      sourcemap: true
    },
    {
      file: 'dist/es/bundle.js',
      format: 'es',
      name: 'MyApp',
      sourcemap: true
    },
    {
      file: 'dist/cjs/bundle.js',
      format: 'cjs',
      name: 'MyApp',
      sourcemap: true
    }
  ],
  external: [
    'react'
  ]
}
