import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
const pkgJson = require('./package.json')

// import sass from 'rollup-plugin-sass';
// import postcss from 'rollup-plugin-postcss';

const externals = [
  ...Object.keys(pkgJson.dependencies),
  ...Object.keys(pkgJson.peerDependencies),
]

module.exports = {
  input: 'src/index.js',
  external: id => {
    if (externals.includes(id)) return true
    if (/module\.s?css$/.test(id)) return true
    return false
  },
  output: {
    file: 'index.cjs.js',
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs({
      // include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['babel-preset-env', { modules: false }]],
      plugins: [
        [
          'transform-rename-import',
          {
            original: '^(.+?)\\.scss$',
            replacement: '$1.css',
          },
        ],
        'transform-class-properties',
        'transform-object-rest-spread',
        'transform-react-jsx',
        'external-helpers',
      ],
    }),
  ],
}
