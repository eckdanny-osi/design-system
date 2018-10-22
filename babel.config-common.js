module.exports = {
  presets: ['env', 'react'],
  plugins: [
    'transform-class-properties',
    'transform-object-rest-spread',
    [
      'transform-rename-import',
      {
        original: '^(.+?)\\.scss$',
        replacement: '$1.css',
      },
    ],
  ],
}
