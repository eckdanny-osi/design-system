/**
 * Jest config utility fns for the CARES monorepo multiproject runner
 */

/**
 * Retuns default values for a jest project config
 * @param {Object} opts
 * @param {string} opts.project
 * @returns {Object} Jest configuration object
 */
function getDefault() {
  return {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/../../setupTests.js'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|scss)$': 'identity-obj-proxy',
      '^@cwds\\/([^/]+)': '<rootDir>/../$1/src',
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
    coverageReporters: ['lcov'],
    coverageDirectory: '<rootDir>/../../coverage',
    moduleFileExtensions: ['js', 'jsx', 'css', 'scss'],
  }
}

module.exports = {
  getDefault,
}
