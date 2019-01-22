import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const externals = depsBlacklist(pkg)

export default [
  {
    input: 'src/index.js',
    external: id => {
      if (externals.includes(id)) return true
      if (/module\.s?css$/.test(id)) return true
      return false
    },
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: [
          [
            'transform-rename-import',
            {
              original: '^(.+?)\\.scss$',
              replacement: '$1.css',
            },
          ],
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-transform-react-jsx',
          '@babel/plugin-external-helpers',
        ],
      }),
    ],
  },
]

function depsBlacklist({ dependencies = {}, peerDependencies = {} }) {
  return [...Object.keys(dependencies), ...Object.keys(peerDependencies)]
}
