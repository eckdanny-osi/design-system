const { resolve } = require('path')
const { readFileSync } = require('fs')
const { execSync } = require('child_process')
const { createMacro } = require('babel-plugin-macros')

/**
 * Get monorepo misc stats at compile-time for reporting page(s)
 * Usage:
 *    import getStats from ./path/to/repo-status.macro'
 *    const stats = getStats()
 */
function repoStatusMacro({ references, state, babel }) {
  const { default: defaultImport = [] } = references
  const { types: t } = babel
  defaultImport.forEach(ref => {
    try {
      if (ref.parentPath.type !== 'CallExpression') throw new Error()
      if (ref !== ref.parentPath.get('callee')) throw new Error()
    } catch (e) {
      throw new Error(
        `This is not supported: \`${ref
          .findParent(t.isExpression)
          .getSource()}\`. Check the usage in ${__filename}`
      )
    }
    ref.parentPath.replaceWith(
      t.identifier(JSON.stringify(collectRepoStatus()))
    )
  })
}

function collectRepoStatus() {
  const status = {}
  status.build = {
    date: new Date(),
    repositoryUrl: process.env.REPOSITORY_URL || '<local>',
    branch: process.env.BRANCH || '<local>',
    pullRequest: process.env.PULL_REQUEST || '<local>',
    head: process.env.HEAD || git(),
    commitRef: process.env.COMMIT_REF || '<local>',
    context: process.env.CONTEXT || '<local>',
    reviewId: process.env.REVIEW_ID || '<local>',
  }
  status.main = pkgJson()
  status.packages = packages()
  status.lerna = lerna()
  status.version = status.lerna.version
  return status
}

function rootDir() {
  return execSync('git rev-parse --show-toplevel', {
    encoding: 'utf8',
  }).trim()
}

function pkgJson() {
  return JSON.parse(
    readFileSync(resolve(rootDir(), 'package.json'), { encoding: 'utf8' })
  )
}

function packages() {
  return JSON.parse(
    execSync('npx lerna ls --json', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  ).map(pkg => ({
    ...pkg,
    pkgJson: JSON.parse(
      readFileSync(resolve(pkg.location, 'package.json'), 'utf8')
    ),
  }))
}

function git() {
  return execSync('git rev-parse --abbrev-ref HEAD', {
    encoding: 'utf8',
  }).trim()
}

function lerna() {
  const lerna = require(resolve(rootDir(), 'lerna.json'))
  return lerna
}

module.exports = createMacro(repoStatusMacro)

if (typeof require != 'undefined' && require.main === module) {
  process.stdout.write(
    `${JSON.stringify(collectRepoStatus(), null, 2)}\n`,
    'utf8'
  )
}
