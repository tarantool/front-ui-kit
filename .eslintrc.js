module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  settings: {
    react: {
      version: 'detect',
      flowVersion: 'detect'
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    jsx: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'jsx-a11y'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/triple-slash-reference': 'off'
      }
    },
    {
      extends: ['plugin:flowtype/recommended'],
      files: ['*.js', '*.jsx'],
      plugins: ['flowtype'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  rules: {
    'no-console': 'warn',
    // prettier
    'prettier/prettier': 'warn',
    // react
    'react/prop-types': 'off',
    'react/display-name': 'off',
    // typescript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // a11y
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-autofocus': 'off'
  }
};
