#!/usr/bin/env bash
# Go to top project folder:
SCRIPT_DIRECTORY=`dirname $0`
cd ${SCRIPT_DIRECTORY}
cd ..

echo "====================================================="
echo "Deleting npm packages..."
echo "====================================================="
rm -rf ./node_modules || exit

echo "====================================================="
echo "Installing npm packages..."
echo "====================================================="
npm install || exit

#react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

# Go to android folder to create ipa file

echo "====================================================="
echo "Deleting app build..."
echo "====================================================="

cd ./android
rm -rf ./app/build || exit

echo "====================================================="
echo "Building app"
echo "====================================================="


ENVFILE=.env.production ./gradlew assembleRelease

# Let's print where we are
echo "====================================================="
echo "Moving apk to dist folder"
echo "====================================================="

mv app/build/outputs/apk/release/app-release.apk ../dist/eren-holding.apk || exit

echo "====================================================="
echo "RELEASE COMPLETED!"
echo "====================================================="