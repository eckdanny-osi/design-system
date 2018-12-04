module.exports = {
  extends: [
    'prettier',
  ],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        singleQuote: true,
        semi: false,
      }
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
};
