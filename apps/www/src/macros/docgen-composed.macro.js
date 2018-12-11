/* eslint no-console: ["error", { allow: ["log"] }] */

const { createMacro } = require('babel-plugin-macros')
const docgen = require('react-docgen')
const path = require('path')
const fs = require('fs')
const merge = require('lodash.merge')

module.exports = createMacro(docgenComposedMacro)

function docgenComposedMacro({ references, state, babel }) {
  const { default: defaultImport = [] } = references
  const { types: t } = babel

  defaultImport.forEach(referencePath => {
    if (referencePath.parentPath.type === 'CallExpression') {
      if (referencePath === referencePath.parentPath.get('callee')) {
        const foo = referencePath.parentPath
          .get('arguments')
          .map(d => d.node.value)
        const docgens = composeDocgens(foo)
        referencePath.parentPath.replaceWith(
          t.identifier(JSON.stringify(docgens))
        )
      }
    } else {
      // throw a helpful error message or something :)
    }
  })
}

function composeDocgens(modules) {
  return modules.reverse().reduce((acc, m) => {
    return merge(acc, getDocgen(m))
  }, {})
}

function getDocgen(module) {
  const path = require.resolve(module)
  const source = fs.readFileSync(path)
  let value = {}
  try {
    value = docgen.parse(source)
  } catch (e) {
    console.log('ERROR in docgen-loader', e)
  }
  return value
}
