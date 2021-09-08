module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svg': '<rootDir>/configs/jestSVGLoader.js',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
