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

module.exports = {
  depsBlacklist,
}
