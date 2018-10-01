const { execSync } = require('child_process');
const pkgJsonPath = require.resolve('@cwds/components/package.json');
const pkg = require(pkgJsonPath);
const gitInfo = execSync('git rev-parse --abbrev-ref HEAD', {
  encoding: 'utf8',
}).trim();

module.exports = () => {
  return {
    code: `module.exports = {
      version: ${JSON.stringify(pkg.version)},
      buildDate: ${JSON.stringify(new Date())},
      gitInfo: ${JSON.stringify(gitInfo)}
    }`,
  };
};
