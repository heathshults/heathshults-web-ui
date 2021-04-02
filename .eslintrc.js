module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-var-requires': 0,
    'font-family-no-missing-generic-family-keyword': 0,
    semi: [
      2,
      'always',
      {
        omitLastInOneLineBlock: true,
      },
    ],
    'no-unused-expressions': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
};
