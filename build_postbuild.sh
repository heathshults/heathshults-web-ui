#!/usr/bin/env bash
# set -x

echo "Running Build from AppRoot"
cd $(npm root) # changes to the no  de_modules folder (npm root)
cd .. # changes directories one level up to the app root

echo "Wrapping up css..."
npx postcss "www/assets/css/*.css" --use autoprefixer -d www/assets/css/

echo "Starting development server..."
npx gulp connect_sync
SERVEAPP=$!

$SERVEAPP
