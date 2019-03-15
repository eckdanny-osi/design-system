const { getDefault } = require('../../scripts/jest-utils')

// TODO: Sort out how we want to toggle JiT transforms vs run compiled tests[CL-89](https://osi-cwds.atlassian.net/browse/CL-89)
const base = getDefault()

module.exports = {
  ...base,
  displayName: 'forms',
  testPathIgnorePatterns: [
    ...base.testPathIgnorePatterns,
    '<rootDir>/compiled',
  ],
}
