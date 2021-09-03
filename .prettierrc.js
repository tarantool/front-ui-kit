module.exports = {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.jsx',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.tsx',
      options: {
        parser: 'typescript',
      },
    },
  ],
};
