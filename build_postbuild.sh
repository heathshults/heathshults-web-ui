#!/usr/bin/env bash
# set -x

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

npx postcss --use autoprefixer www/assets/css/HeathStyle.built.css --output www/assets/css/HeathStyle.built.css &


echo "Build complete..."
echo "Browsersync is proxying: http://127.0.0.1:8000 at"
echo "Local: http://localhost:3000"
echo "External: http://172.19.201.198:3000"
echo "Build HeathShults.com completed succesfully."

