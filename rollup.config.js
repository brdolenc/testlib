import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import packageJson from './package.json' assert { type: 'json' };

export const getFolders = (entry) => {
  const dirs = fs.readdirSync(entry);
  const dirsWithoutIndex = dirs.filter((name) => name !== 'index.ts').filter((name) => name !== 'utils');
  return dirsWithoutIndex;
};

const plugins = [
  external(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  postcss(),
  terser(),
];

const subfolderPlugins = (folderName) => [
  ...plugins,
  generatePackageJson({
    baseContents: {
      name: `${packageJson.name}/${folderName}`,
      private: false,
      main: '../cjs/index.js',
      module: './index.js',
      types: './index.d.ts',
    },
  }),
];
const folderBuilds = getFolders('./src').map((folder) => ({
  input: `src/${folder}/index.ts`,
  output: {
    file: `dist/${folder}/index.js`,
    sourcemap: true,
    exports: 'named',
    format: 'esm',
  },
  plugins: subfolderPlugins(folder),
  external: ['react', 'react-dom'],
}));

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-dom'],
  },
  ...folderBuilds,
  {
    input: ['src/index.ts'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-dom'],
  },

];
