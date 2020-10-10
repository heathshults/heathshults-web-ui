require("@babel/register")({
  presets: ["@babel/preset-env"],
  "plugins": [["import", {"libraryName": "@material-ui/core"}], "@babel/plugin-syntax-dynamic-import"]
});
import './js/HeathScript';
import './js/modules/show-more-fadebar/show-more.js';
import './js/contact_me';
import './js/jqBootstrapValidation';
import './js/swiper'; 
