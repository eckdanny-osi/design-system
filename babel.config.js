module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'preval',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    [
      'transform-rename-import',
      {
        original: '^(.+?)\\.scss$',
        replacement: '$1.css',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'transform-remove-console',
          {
            exclude: ['error', 'warn'],
          },
        ],
      ],
    },
  },
}
