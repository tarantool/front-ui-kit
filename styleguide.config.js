const { name, version } = require('./package');

module.exports = {
  sections: [
    {
      name: 'Readme',
      content: './readme.md'
    },
    {
      name: 'Colors',
      content: './colors.md'
    },
    {
      name: 'UI Components',
      components: 'src/components/*/index.js'
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
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;1,400;1,600&family=Source+Code+Pro:wght@400;500&display=swap'
        }
      ]
    }
  },
  title: name,
  // skipComponentsWithoutExample: true,
  exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
  usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
  styleguideDir: 'docs',
  version
};
