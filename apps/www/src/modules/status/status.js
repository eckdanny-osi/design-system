import preval from 'preval.macro'

const status = preval`
  const { readFileSync } = require('fs');
  const { resolve } = require('path');
  const { execSync } = require('child_process');

  const rootDir = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf8',
  }).trim();

  // Main
  const mainPkg = JSON.parse(
    readFileSync(resolve(rootDir, 'package.json'), { encoding: 'utf8' })
  );
  mainPkg.name = 'main';

  // Packages
  const packages = JSON.parse(
    execSync('npx lerna ls --json', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  ).map(pkg => {
    return {
      ...pkg,
      pkgJson: JSON.parse(
        readFileSync(resolve(pkg.location, 'package.json'), 'utf8')
      ),
    };
  });

  // Git
  const git = execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim();

  // Build
  const build = {
    repositoryUrl: process.env.REPOSITORY_URL || '',
    branch: process.env.BRANCH || '',
    pullRequest: process.env.PULL_REQUEST || '',
    head: process.env.HEAD || git,
    commitRef: process.env.COMMIT_REF || '',
    context: process.env.CONTEXT || 'local',
    reviewId: process.env.REVIEW_ID || '',
    date: new Date()
  };

  const out = {
    main: mainPkg,
    packages,
    build,
    version: 'latest',
  };
  module.exports = out;
`

export default status
