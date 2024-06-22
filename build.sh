#!/bin/bash

# Set variables
APP_NAME="DevTools"
BUILD_DIR="./build"
DMG_NAME="${APP_NAME}.dmg"

# Print start message
echo "Starting build process for ${APP_NAME}..."

# Build the app
echo "Building ${APP_NAME}..."
xcodebuild -workspace ./macos/${APP_NAME}.xcworkspace -scheme ${APP_NAME}-macOS -configuration Release -derivedDataPath ${BUILD_DIR}

# Move the .app file to the build folder
echo "Moving ${APP_NAME}.app to ${BUILD_DIR}..."
mv ${BUILD_DIR}/Build/Products/Release/${APP_NAME}.app ${BUILD_DIR}/

# Remove everything in the build folder except DevTools.app
echo "Cleaning build directory..."
find "${BUILD_DIR}" -mindepth 1 -maxdepth 1 ! -name "${APP_NAME}.app" -exec rm -rf {} +

# Print a success message for the build
echo "Build complete. ${APP_NAME}.app is now in ${BUILD_DIR}/"

# Create a temporary directory for staging
echo "Preparing to create DMG..."
temp_dir=$(mktemp -d)

# Copy your .app to the temporary directory
echo "Copying ${APP_NAME}.app to staging area..."
cp -R "${BUILD_DIR}/${APP_NAME}.app" "$temp_dir/"

# Create a symbolic link to the Applications folder
echo "Creating symbolic link to Applications folder..."
ln -s /Applications "$temp_dir/Applications"

# Create the DMG
echo "Creating DMG..."
hdiutil create -volname "${APP_NAME}" -srcfolder "$temp_dir" -ov -format UDZO "${BUILD_DIR}/${DMG_NAME}"

# Clean up the temporary directory
echo "Cleaning up temporary files..."
rm -rf "$temp_dir"

# Print a success message
echo "DMG creation complete. ${DMG_NAME} is now in ${BUILD_DIR}/"

echo "Build and packaging process finished successfully!"
