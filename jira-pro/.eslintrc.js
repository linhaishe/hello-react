module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb-typescript', 'plugin:import/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'max-len': [2, { code: 120 }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'object-curly-spacing': 2,
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': 1,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/default-param-last': 1,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/require-default-props': 0,
    'no-nested-ternary': 1,
    'import/prefer-default-export': 1,
    'react/jsx-props-no-spreading': 1,
  },
};
