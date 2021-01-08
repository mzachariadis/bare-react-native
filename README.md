# React Native application

## Create Bare Project
When a new bare project is created, these lines of README are not needed. 
To create a bare project execute the commands below on the root directory: 
1. `npx react-native-rename <newName> -b <bundleIdentifier>`. E.g. for this project is `npx react-native-rename "Bare React Native" -b com.barereactnative`
2. `watchman watch-del-all`
3. `npx react-native start --reset-cache`
4. Open `./android/app/_BUCK` and rename current bundle id 
5. Rename package name folders of debug/ and release/ on `./android/app/src/main/java/`
6. Update package name inside the related files such as `MainActivity.java`, `MainApplication.java`
7. `npm install`
8. `cd ios && open <newName>.xcworkspace` and the Xcode will be opened. Change the bundle identifier
9. `cd ios && pod install`

## Environmental variables

Rename `.env.example` to `.env` to get the local environmental variables you need to run your application properly. `API_URL` variable holds the server address of the backend service.

## Installation

1. Install [Node.js](https://nodejs.org) stable version
2. Run `npm install` inside the root mobile folder
3. Follow the **React Native CLI** instructions [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup) to install iOS and Android dependencies

#### Run on iOS

1. (*Only the first time and only if a new dependency is installed*) From the mobile directory run `cd ios && pod install`
2. Open `*.xcworkspace` with Xcode
3. Build and Run the application through Xcode
4. It will automatically open the iOS simulator

#### Run on Android

1. Use the script `npm run android`
2. It will automatically open the android emulator

#### Run on Android using APK

If a physical device is used, the "Allow App Installations from Unknown Sources" option must be enabled from the settings. In addition, remove any previous version of the app.