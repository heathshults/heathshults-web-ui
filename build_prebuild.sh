#!/usr/bin/env bash
# set -x

echo "Running Build from AppRoot"
cd $(npm root) # changes to the node_modules folder (npm root)
cd .. # changes directories one level up to the app root

DNOW=$(date +'%A %b %d %Y')
TNOW=$(date +'%r')
echo "Building HeathShults Web UI on $DNOW $TNOW \n" 
echo "Prebuild activated..." 

echo "Cleaning...." 
node build-scripts/clean.js &&
CLEANER=$! # get background process id of ESLINT

# echo "Running css linters" 
wait $CLEANER
echo "Running Javascript linters.... \N" 
npx eslint --fix src/js/modules/**/*.ts &
ESLINTPID=$! # get background process id of ESLINT

wait $ESLINTPID
echo "Running css linters" 
npx stylelint --fix src/scss/**/*.scss &
STYLELINTPID=$!

# echo "Typechecking [.js, .jsx, .ts, .tsx] files..." 
wait $STYLELINTPID
tsc --project ./tsconfig.typecheck.json &

echo "Prebuild completed"
