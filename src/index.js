require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {"libraryName": "@material-ui/core"}], "@babel/plugin-syntax-dynamic-import"]
});
require('./js/HeathScript');
require('./js/modules/show-more-fadebar/show-more.js');
require('./js/jqBootstrapValidation');
require('./js/contact_me');
require('./js/swiper');
