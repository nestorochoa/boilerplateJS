module.exports = {
  testEnvironment: "node", // Use 'node' as the environment (use 'jsdom' for browser-like behavior)
  testMatch: ["**/*.test.js"], // You can customize the file pattern for your test files
  collectCoverage: true, // Collect coverage information
  coverageDirectory: "coverage", // Specify where coverage reports will be saved
};
