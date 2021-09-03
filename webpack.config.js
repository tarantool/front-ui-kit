// const autoprefixer = require('autoprefixer');
const path = require('path');

const shouldUseSourceMap = true;

module.exports = {
  mode: 'development',
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: shouldUseSourceMap ? 'source-map' : false,
  // In production, we only want to load the polyfills and the app code.
  module: {
    strictExportPresence: true,
    rules: [
      // TODO: Disable require.ensure as it's not a standard language feature.
      // We are waiting for https://github.com/facebookincubator/create-react-app/issues/2176.
      // { parser: { requireEnsure: false } },

      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve('./src'),
      },
      {
        oneOf: [
          // Process TS with ts-loader.
          {
            test: /\.(ts|tsx)$/,
            include: path.resolve('./src'),
            loader: require.resolve('ts-loader'),
            options: {},
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: path.resolve('./src'),
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          // Process any JS outside of the app with Babel.
          // Unlike the application JS, we only compile the standard ES features.
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [[require.resolve('babel-preset-react-app/dependencies'), { helpers: true }]],
              cacheDirectory: true,
              cacheCompression: true,
              // If an error happens in a package, it's possible to be
              // because it was compiled. Thus, we don't want the browser
              // debugger to show the original code. Instead, the code
              // being evaluated would be much more helpful.
              sourceMaps: false,
            },
          },
          // The notation here is somewhat confusing.
          // "postcss" loader applies autoprefixer to our CSS.
          // "css" loader resolves paths in CSS and adds assets as dependencies.
          // "style" loader normally turns CSS into JS modules injecting <style>,
          // but unlike in development configuration, we do something different.
          // `ExtractTextPlugin` first applies the "postcss" and "css" loaders
          // (second argument), then grabs the result CSS and puts it into a
          // separate file in our build process. This way we actually ship
          // a single CSS file in production instead of JS code injecting <style>
          // tags. If you use code splitting, however, any async bundles will still
          // use the "style" loader inside the async code so CSS from them won't be
          // in the main CSS file.
          // {
          //   test: /\.css$/,
          //   use: [
          //     {
          //       loader: require.resolve('style-loader')
          //     },
          //     {
          //       loader: require.resolve('css-loader'),
          //       options: {
          //         importLoaders: 1,
          //         sourceMap: shouldUseSourceMap
          //       }
          //     },
          //     {
          //       loader: require.resolve('postcss-loader'),
          //       options: {
          //         // Necessary for external CSS imports to work
          //         // https://github.com/facebookincubator/create-react-app/issues/2677
          //         ident: 'postcss',
          //         plugins: () => [
          //           require('postcss-flexbugs-fixes'),
          //           autoprefixer({
          //             browsers: [
          //               '>1%',
          //               'last 4 versions',
          //               'Firefox ESR',
          //               // EDIT -->
          //               'not ie < 11'
          //               // <-- EDIT
          //             ],
          //             flexbox: 'no-2009'
          //           })
          //         ]
          //       }
          //     }
          //   ]
          // },
          // "file" loader makes sure assets end up in the `build` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            test: /\.svg$/,
            include: path.resolve(__dirname, 'src/'),
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  name: '[name].[hash]',
                  prefixize: true,
                },
              },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [{ removeTitle: true }, { convertPathData: false }, { removeUselessStrokeAndFill: true }],
                },
              },
            ],
          },
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: `static/media/[name].[hash:8].[ext]`,
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
};
