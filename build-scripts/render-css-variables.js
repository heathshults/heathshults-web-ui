const path = require("path");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
    ["import", { libraryName: "@material-ui/core" }],
  ],
});

const ScssVar2CssVar = require("../src/js/modules/scssVars-2-cssVars");

const scssVarFile = path.resolve(
  __dirname,
  "../src/scss/variables/_colors.scss"
);
const cssVarFile = path.resolve(
  __dirname,
  "../src/scss/variables/_css-vars2.css"
);

const convert = new ScssVar2CssVar(scssVarFile, cssVarFile)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
