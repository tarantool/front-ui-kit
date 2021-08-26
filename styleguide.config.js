const path = require('path');
const docgen = require('react-docgen');

const { version } = require('./package');

const tsParser = require('react-docgen-typescript').withDefaultConfig({
  savePropValueAsString: true
}).parse;

const propsParser = function (filePath, source) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    return docgen.parse(source);
  }

  return tsParser(filePath);
};

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
      content: './readme.md'
    },
    {
      name: 'Colors',
      content: './colors.md'
    },
    {
      name: 'UI Components',
      content: './components.md',
      components: 'src/components/*/index.{ts,js}',
      sectionDepth: 1
    },
    {
      name: 'Generic styles',
      content: 'src/genericStyles/readme.md'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/tarantool/front-ui-kit',
      external: true
    }
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          // eslint-disable-next-line max-len
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Source+Code+Pro:wght@400;500&display=swap'
        }
      ]
    }
  },
  exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
  moduleAliases: {
    '@tarantool.io/ui-kit': path.resolve(__dirname, 'src')
  },
  pagePerSection: true,
  // skipComponentsWithoutExample: true,
  styleguideDir: 'docs',
  title: 'Tarantool UI-Kit',
  // tocMode: 'expand',
  usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
  version,
  propsParser,
  resolver: docgen.resolver.findAllComponentDefinitions
};
