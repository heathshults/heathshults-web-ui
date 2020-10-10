module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended"
  ],  
  "rules": {
    'no-console': 1,
    'no-undef': 1,
    'no-unused-vars': 1,
    'no-var-requires': 0,
    'semi': [2, 'always', {
      'omitLastInOneLineBlock': true
    }]
  }
};
