module.exports = {
  setupFilesAfterEnv: ["<rootDir>/config/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "/test/.*.tsx?$",
  reporters: ["./node_modules/jest-simple-dot-reporter"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: false,
};
