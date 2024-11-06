module.exports = {
  testEnvironment: "jsdom",
  rootDir: "src",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "clover"],
};
