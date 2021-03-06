const path = require('path')
const fs = require('fs')
const { createMacro } = require('babel-plugin-macros')

module.exports = createMacro(rawMacros)

function rawMacros({ references, state, babel }) {
  references.default.forEach(referencePath => {
    if (referencePath.parentPath.type === 'CallExpression') {
      requireRaw({ referencePath, state, babel })
    } else {
      throw new Error(
        `This is not supported: \`${referencePath
          .findParent(babel.types.isExpression)
          .getSource()}\`. Please see the raw.macro documentation`
      )
    }
  })
}

function requireRaw({ referencePath, state, babel }) {
  const filename = state.file.opts.filename
  const callExpressionPath = referencePath.parentPath
  const dirname = path.dirname(filename)
  let rawPath

  try {
    rawPath = callExpressionPath.get('arguments')[0].evaluate().value
  } catch (err) {
    // swallow error, print better error below
  }

  if (rawPath === undefined) {
    throw new Error(
      `There was a problem evaluating the value of the argument for the code: ${callExpressionPath.getSource()}. ` +
        `If the value is dynamic, please make sure that its value is statically deterministic.`
    )
  }

  const fullPath = path.resolve(dirname, rawPath)
  // const fileContent = fs.readFileSync(fullPath, { encoding: 'utf-8' })
  // const fileContent = JSON.stringify(fs.statSync(fullPath))

  // referencePath.parentPath.replaceWith(
  //   t.expressionStatement(t.stringLiteral(fileContent))
  // )

  const duh = JSON.stringify(fs.statSync(fullPath))
  referencePath.parentPath.replaceWithSourceString(`${duh}`)
}
