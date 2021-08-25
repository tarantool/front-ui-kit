import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import svgSpriteLoader from 'rollup-svg-sprite-loader';
import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import replace from '@rollup/plugin-replace';

const rollupBuilds = [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/uiKit.js',
        format: 'cjs'
      },
      {
        file: 'dist/uiKit-es.js',
        format: 'es'
      }
    ],
    external: [
      'react',
      'react-dom'
    ],
    plugins: [
      svgSpriteLoader(),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      commonjs({
        include: 'node_modules/**',
        sourceMap: false,
        namedExports: {
          'react-draggable': ['DraggableCore']
        }
      }),
      autoExternal(),
      replace({
        preventAssignment: true,
        values: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      })
    ]
  }
];

export default rollupBuilds;
