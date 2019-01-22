import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const externals = depsBlacklist(pkg)

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
      },
    ],
    external: id => {
      if (externals.includes(id)) return true
      if (/module\.s?css$/.test(id)) return true
      return false
    },
    plugins: [
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: [
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
