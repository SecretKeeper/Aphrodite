module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-else-return': 'error',
    'no-self-compare': 'error',
    'no-void': 'error',
    'no-var': 'error',
    'no-lonely-if': 'error',
    'prefer-const': 'error',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
  },
  settings: {
    react: {
      pragma: 'h',
      version: 'detect',
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
