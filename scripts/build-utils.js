/**
 *
 * @param {*} value
 * @param {number} index
 * @param {*[]} array
 */
function distinct(value, index, array) {
  return array.indexOf(value) === index
}

/**
 *
 * @param {Object} pkgJson
 * @param {Object} pkgJson.dependencies
 * @param {Object} pkgJson.peerDependencies
 */
export function depsBlacklist({ dependencies = {}, peerDependencies = {} }) {
  return [
    ...Object.keys(dependencies),
    ...Object.keys(peerDependencies),
  ].filter(distinct)
}
