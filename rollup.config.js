import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  external: ['react', 'react-dom', 'prop-types', 'styled-components'],
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss(),
    terser(),
  ],
};
