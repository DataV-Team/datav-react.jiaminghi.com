const {
  override,
  addLessLoader,
  disableEsLint,
  useEslintRc
} = require("customize-cra");
const path = require("path");

module.exports = override(
  useEslintRc(),
  disableEsLint(),
  addLessLoader({
    javascriptEnabled: true
  })
);
