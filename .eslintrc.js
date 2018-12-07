const pkg = require('./package.json')
module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react', 'prettier', 'standard', 'jsx-a11y', 'jest', 'babel'],
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true,
    'jest/globals': true,
  },
  rules: {
    'babel/no-invalid-this': 1,
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      },
    ],
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: (pkg.devDependencies && pkg.devDependencies.react) || '^16.4',
    },
  },
}
