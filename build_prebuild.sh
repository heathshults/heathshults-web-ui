#!/usr/bin/env bash
set -x

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

DNOW=$(date +'%A %b %d %Y')
TNOW=$(date +'%r')
echo "Building HeathShults Web UI on $DNOW $TNOW" 
echo "Prebuild activated..." 

# echo "Cleaning...." 
node build-scripts/clean-components.js &&

# echo "Running Javascript linters...." 
npx eslint --fix src/js/HeathScript.js src/js/vendor/jqBootstrapValidation.js src/js/contact_me.js src/js/modules/show-more-fadebar/show-more.js &
ESLINTPID=$! # get background process id of ESLINT

# echo "Running css linters" 
wait $ESLINTPID
npx stylelint --fix src/scss/**/*.scss  &
STYLELINTPID=$!

# echo "Typechecking [.js, .jsx, .ts, .tsx] files..." 
wait $STYLELINTPID
tsc --project ./tsconfig.typecheck.json  &

echo "Prebuild completed"
