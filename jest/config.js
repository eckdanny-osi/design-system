module.exports = ({ project }) => ({
  name: project,
  displayName: project,
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/../../setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  coverageReporters: ['lcov'],
  coverageDirectory: '<rootDir>/../../coverage',
})
