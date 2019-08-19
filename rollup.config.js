import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import svgo from 'rollup-plugin-svgo';

const rollupBuilds = [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/uiKit.js',
        format: 'cjs',
      },
      {
        file: 'dist/uiKit-es.js',
        format: 'es',
      },
    ],
    external: [
      'react',
      'react-proptypes',
      'emotion',
    ],
    plugins: [
        resolve(),
        babel({
          exclude: 'node_modules/**',
          runtimeHelpers: true,
        }),
        svgo(),
    ],
  }
];

export default rollupBuilds;
