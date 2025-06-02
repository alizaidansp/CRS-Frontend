module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transformIgnorePatterns: ["node_modules/(?!.*.mjs$)", "<rootDir>/dist/"],

  coverageDirectory: "coverage",
  collectCoverage: true,
  coverageReporters: ["html", "lcov", "text"],

  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 95,
      statements: 95,
    },
  },
};
