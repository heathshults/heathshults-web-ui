#!/usr/bin/env bash

NMB="node_modules/.bin"

echo "Running postbuild scripts..."
npx postcss www-app/assets/css/*.css --use autoprefixer -d www-app/assets/css
node build-scripts/copy-comps.js 
node build-scripts/build-assets.js 
$NMB/gulp copy_js 
$NMB/copy www/sw.js www-app
$NMB/copy src/global/**/* www-app/global
$NMB/copy src/php/**/* www-app/php
$NMB/copy src/mail/**/* www-app/mail
$NMB/copy www/components/**/* www-app/components
$NMB/gulp connect_sync
echo "Postbuild completed succesfully."

