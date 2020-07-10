'use strict';
const autoprefixer = require('autoprefixer')
const fs = require('fs');
const packageJSON = require('../package.json');
const path = require('path');
const postcss = require('postcss')
const sass = require('sass');
const sh = require('shelljs');

const stylesPath = '../src/scss/styles.scss';
const destPath = path.resolve(path.dirname(__filename), '../dist/css/HeathStyle.built.css');

module.exports = function renderSCSS() {
    
    const results = sass.renderSync({
        data: entryPoint,
        includePaths: [
            path.resolve(path.dirname(__filename), '../node_modules')
        ],
      });

    const destPathDirname = path.dirname(destPath);
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }

    postcss([ autoprefixer ]).process(results.css, {from: 'HeathStyle.built.css', to: 'HeathStyle.built.css'}).then(result => {
        result.warnings().forEach(warn => {
            console.warn(warn.toString())
        })
        fs.writeFileSync(destPath, result.css.toString());
    })

};

const entryPoint = `/*!
* Heathen's Profile - ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
* Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
* Licensed under ${packageJSON.license} (https://github.com/heathshults.com/${packageJSON.name}/blob/master/LICENSE)
*/
@import "${stylesPath}"
`
