const PopperJs = require('popper.js')

function Mock() {
  return {
    destroy: () => {},
    scheduleUpdate: () => {},
  }
}

Mock.placements = PopperJs.placements

module.exports = Mock
