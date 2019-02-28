import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const REGEXP_STYLE_MODULE = /module\.s?css$/

/**
 * Predicate filter fn to return distinct elements
 * @private
 * @param {*} value
 * @param {number} index
 * @param {*[]} array
 */
function distinct(value, index, array) {
  return array.indexOf(value) === index
}

/**
 * Extract distinct deps and peerDeps from pkgJson
 * @param {Object} pkgJson
 * @param {Object} pkgJson.dependencies
 * @param {Object} pkgJson.peerDependencies
 */
function depsBlacklist({ dependencies = {}, peerDependencies = {} }) {
  return [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies),
  ].filter(distinct)
}

export function mkRollupConfig(pkg, opts = {}) {
  const externals = depsBlacklist(pkg)
  return {
    input: 'src/index.js',
    external: id => {
      if (externals.includes(id)) return true
      if (REGEXP_STYLE_MODULE.test(id)) return true
      return false
    },
    output: {
      file: pkg.main,
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      resolve({
        extensions: ['.js', '.jsx'],
      }),
      commonjs(),
      babel({
        rootMode: 'upward',
      }),
    ],
    ...opts,
  }
}
