"use strict";

require("./hs-timeline");

/* eslint-disable @typescript-eslint/no-var-requires */
require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {
    "libraryName": "@material-ui/core"
  }], "@babel/plugin-syntax-dynamic-import"]
});