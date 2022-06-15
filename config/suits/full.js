const jestConfig = require("../jest.config");

const suits = [
  "/test/.*\\.ts$",
];

const ignoreSuits = [];

module.exports = {
  ...jestConfig,
  ...{
    testRegex: suits,
    testPathIgnorePatterns: ignoreSuits,
    rootDir: "<rootDit>/../../../",
  },
};
