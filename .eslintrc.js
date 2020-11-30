module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2017": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': 1,
        'no-undef': 1,
        'no-unused-vars': 1,
        'no-var-requires': 0,
        'semi': [2, 'always', {
            'omitLastInOneLineBlock': true
        }],
        "@typescript-eslint/no-this-alias": 0,
        "@typescript-eslint/no-explicit-any": 0
    }
};
