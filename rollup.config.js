// @flow
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import autoExternal from 'rollup-plugin-auto-external';
import del from 'rollup-plugin-delete';
// import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import svgSpriteLoader from 'rollup-svg-sprite-loader';

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];

const rollupBuilds = [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index-es.js',
        format: 'es',
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      del({
        targets: './dist/*',
      }),
      svgSpriteLoader(),
      resolve({
        extensions,
      }),
      commonjs({
        include: 'node_modules/**',
        sourceMap: false,
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
          },
        },
      }),
      babel({
        exclude: ['node_modules/**'],
        babelHelpers: 'inline',
        extensions,
      }),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
      }),
      autoExternal(),
      // terser(),
    ],
  },
];

export default rollupBuilds;
