module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
