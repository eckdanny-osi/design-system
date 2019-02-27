const { getDefault } = require('./scripts/jest-utils')

module.exports = {
  ...getDefault(),
  projects: ['<rootDir>/libs/*'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  coverageDirectory: '<rootDir>/coverage',
}
