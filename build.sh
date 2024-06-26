#!/bin/bash

# Start the timer
start_time=$(date +%s)

# Variables
APP_NAME="DevTools"
BUILD_DIR="./build"
VERSION=$(cat package.json | python -c "import sys, json; print(json.load(sys.stdin)['version'])")
DMG_NAME="${APP_NAME}-${VERSION}.dmg"

echo "1. Building ${APP_NAME}..."
xcodebuild -workspace ./macos/${APP_NAME}.xcworkspace -scheme ${APP_NAME}-macOS -configuration Release -derivedDataPath ${BUILD_DIR}

echo "2. Moving ${APP_NAME}.app to ${BUILD_DIR}..."
mv ${BUILD_DIR}/Build/Products/Release/${APP_NAME}.app ${BUILD_DIR}/

echo "3. Cleaning build directory..."
find "${BUILD_DIR}" -mindepth 1 -maxdepth 1 ! -name "${APP_NAME}.app" -exec rm -rf {} +

echo "4. Preparing to create DMG..."
temp_dir=$(mktemp -d)

echo "5. Copying ${APP_NAME}.app to staging area..."
cp -R "${BUILD_DIR}/${APP_NAME}.app" "$temp_dir/"

echo "6. Creating symbolic link to Applications folder..."
ln -s /Applications "$temp_dir/Applications"

echo "7. Creating DMG..."
hdiutil create -volname "${APP_NAME}" -srcfolder "$temp_dir" -ov -format UDZO "${BUILD_DIR}/${DMG_NAME}"

echo "8. Cleaning up temporary files..."
rm -rf "$temp_dir"

echo "9. Removing ${APP_NAME}.app..."
rm -rf "${BUILD_DIR}/${APP_NAME}.app"

# Calculate the elapsed time
end_time=$(date +%s)
elapsed_time=$((end_time - start_time))

# Convert seconds to minutes and seconds
minutes=$((elapsed_time / 60))
seconds=$((elapsed_time % 60))

echo "10. ${DMG_NAME} is created. Total execution time: ${minutes} minutes and ${seconds} seconds."
