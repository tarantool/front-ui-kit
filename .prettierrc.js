module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'lf',
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
