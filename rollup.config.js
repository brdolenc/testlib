import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

import packageJson from "./package.json" assert { type: "json" };

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'react-ts-lib'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            postcss(),
            terser(),
            babel({
                extensions,
                exclude: 'node_modules/**',
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      loose: true,
                      modules: false,
                    },
                  ],
                ],
                plugins: ['babel-plugin-styled-components'],
            }),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: "esm" }],
        external: [/\.css$/],
        plugins: [dts()],
    },
]