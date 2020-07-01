module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/cypress/integration/',
  ],
};
