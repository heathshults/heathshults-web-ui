/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-var-requires, no-console */
require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {"libraryName": "@material-ui/core"}], "@babel/plugin-syntax-dynamic-import"]
});

import './js/HeathScript';
// import './js/modules/nav-scroller';
import './js/modules/theme-switcher';
// import './js/modules/show-more-fadebar/show-more.js';
import './js/modules/hs-timeline';
import './js/contact_me';
// import './js/jqBootstrapValidation'



