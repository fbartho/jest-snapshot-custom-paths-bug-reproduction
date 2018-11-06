const jestPreset = require("babel-preset-jest");
module.exports = {
  verbose: true,
  ...jestPreset,
  snapshotResolver: "<rootDir>/scripts/snapshotResolver.js"
};
