module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
    'prettier/standard'
  ],
  plugins: ['react', 'prettier', 'standard', 'jest'],
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true,
    'jest/globals': true,
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
