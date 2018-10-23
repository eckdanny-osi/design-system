import path from 'path'
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

const base = () => ({
  // input,
  // output
  external: id => {
    if (externals.includes(id)) return true
    if (/module\.s?css$/.test(id)) return true
    return false
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
})

module.exports = [
  {
    ...base(),
    input: 'js/core.js',
    output: {
      file: 'core.cjs.js',
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  },
  {
    ...base(),
    input: 'js/variables.js',
    output: {
      file: 'variables.cjs.js',
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  },
]
