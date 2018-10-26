const path = require('path')
const cfg = require('../../jest/config')
const project = __dirname.split(path.sep).pop()

module.exports = {
  ...cfg(project),
}
