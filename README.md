# Polar

## Setting up

### Before all else...
- Make sure you have homebrew and node v4+
- `brew install watchman`
- `npm install -g react-native-cli`

### Build and run
- `npm i`
- `react-native run-ios`
- When the build is complete, `npm run start-dev` to start it up with devtools
- When the simulator shows up, make sure to `cmd+d` and debug JS remotely
- 🎉

### Storybook
- `yarn run storybook`
- In another terminal window, `react-native run-ios`
- In the simulator hit `cmd+d` and ensure that hot reloading is disabled and live reload is enabled
