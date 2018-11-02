const pkgJsonPath = require.resolve('@cwds/components/package.json')
const pkg = require(pkgJsonPath)

module.exports = () => {
  return {
    code: `module.exports = ${JSON.stringify(pkg.version)}`,
  }
}
