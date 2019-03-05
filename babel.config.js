const REGEXP_STORYBOOK = /\.stories\.[jt]sx?$/
const REGEXP_TESTS = [/\/__tests__\/.*\.[jt]sx?$/, /.*(spec|test).[tj]sx?$/]

module.exports = {
  babelrcRoots: ['.', './libs/*'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'preval',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
  env: {
    production: {
      ignore: [REGEXP_STORYBOOK, ...REGEXP_TESTS],
      plugins: [
        [
          'transform-remove-console',
          {
            exclude: ['error', 'warn'],
          },
        ],
      ],
    },
    test: {
      ignore: [REGEXP_STORYBOOK],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
    development: {
      ignore: [REGEXP_STORYBOOK, ...REGEXP_TESTS],
    },
  },
}
