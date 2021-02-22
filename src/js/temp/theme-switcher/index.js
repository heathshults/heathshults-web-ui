"use strict";

require("./theme-switcher");

require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {
    "libraryName": "@material-ui/core"
  }], "@babel/plugin-syntax-dynamic-import"]
});