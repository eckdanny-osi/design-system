import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const RE_CSS = /\.css$/
const RE_CSS_MODULE = /\.module\.css$/
const RE_SASS = /\.(scss|sass)$/
const RE_SASS_MODULE = /\.module\.(scss|sass)$/

function isStyleImport(name) {
  return [RE_CSS, RE_SASS, RE_CSS_MODULE, RE_SASS_MODULE].some(re =>
    re.test(name)
  )
}

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
      if (isStyleImport(id)) return true
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
