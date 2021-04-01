const path = require('path');
const { version } = require('./package');

module.exports = {
  getComponentPathLine: componentPath => {
    const exceptions = ['Icon'];
    const dir = path.dirname(componentPath);
    const fileName = path.basename(componentPath, '.js');
    const name = fileName === 'index' ? dir.slice(dir.lastIndexOf('/') + 1) : fileName;

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
      components: 'src/components/*/index.js',
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
  version
};
