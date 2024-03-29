module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
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
    // 'react/jsx-filename-extension': ['warn', {extensions: ['.js', '.jsx']}],
    // 'react/jsx-props-no-spreading': ['off'],
    // 'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    // indent: [2, 4],
    // 'react/jsx-indent': 'off',
    // 'react/jsx-indent-props': 'off',
    // 'react/jsx-curly-newline': 'off',
    // 'react/prop-types': 'off',
    // 'import/no-unresolved': 'off',
    // 'no-param-reassign': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // 'react-hooks/rules-of-hooks': 'error',
    // 'import/prefer-default-export': 'off',
    // 'react/function-component-definition': 'off',
    '@typescript-eslint/default-param-last': 1,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
