const path = require('path');
const { parse, resolver } = require('react-docgen');
const { withDefaultConfig } = require('react-docgen-typescript');
const { createWebpackConfiguration } = require('@tarantool.io/webpack-config');

const tsParser = withDefaultConfig({
  savePropValueAsString: true,
}).parse;

const propsParser = function (filePath, source) {
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    return tsParser(filePath);
  }

  return parse(source);
};

const webpackConfig = createWebpackConfiguration({
  root: __dirname,
  entry: path.join(__dirname, 'src', 'index.js'),
  lint: true,
  emotion: true,
  middleware: (cfg) => {
    delete cfg.devServer;
    return cfg;
  },
});

module.exports = {
  getComponentPathLine: (componentPath) => {
    const exceptions = ['Icon'];
    const dir = path.dirname(componentPath);
    const fileName = path.basename(componentPath);
    const name = fileName === 'index.js' || fileName === 'index.ts' ? dir.slice(dir.lastIndexOf('/') + 1) : fileName;

    if (exceptions.includes(name)) return;
    return `import { ${name} } from '@tarantool.io/ui-kit';`;
  },
  ignore: ['src/components/SyntaxHighlight/*'],
  sections: [
    {
      name: 'Intro',
      content: './readme.md',
    },
    {
      name: 'Colors',
      content: './colors.md',
    },
    {
      name: 'UI Components',
      content: './components.md',
      components: 'src/components/*/index.{ts,js}',
      sectionDepth: 1,
    },
    {
      name: 'Generic styles',
      content: 'src/genericStyles/readme.md',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/tarantool/front-ui-kit',
      external: true,
    },
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro:wght@400;500&display=swap',
        },
      ],
    },
  },
  moduleAliases: {
    '@tarantool.io/ui-kit': path.resolve(__dirname, 'src'),
  },
  pagePerSection: true,
  styleguideDir: 'docs',
  title: 'Tarantool UI-Kit',
  usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
  exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
  version: require('./package').version,
  resolver: resolver.findAllComponentDefinitions,
  propsParser,
  webpackConfig,
};
