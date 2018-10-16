import preval from 'preval.macro';

const status = preval`
  const { readFileSync } = require('fs');
  const { resolve } = require('path');
  const { execSync } = require('child_process');

  const rootDir = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf8',
  }).trim();
  const mainPkg = JSON.parse(
    readFileSync(resolve(rootDir, 'package.json'), { encoding: 'utf8' })
  );
  mainPkg.name = 'main';
  // lerna packages
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

  const out = {
    main: mainPkg,
    packages,
    git,
    buildDate: JSON.stringify(new Date()),
    build: {
      REPOSITORY_URL: process.env.REPOSITORY_URL || '',
      BRANCH: process.env.BRANCH || '',
      PULL_REQUEST: process.env.PULL_REQUEST || '',
      HEAD: process.env.HEAD || '',
      COMMIT_REF: process.env.COMMIT_REF || '',
      CONTEXT: process.env.CONTEXT || '',
      REVIEW_ID: process.env.REVIEW_ID || '',
    }
    version: 'latest',
  };
  module.exports = out;
`;

export default status;
