# Polar

## Setting up

### Before all else...
- Make sure you have homebrew and node v4+
- `brew install watchman`
- `npm install -g react-native-cli`

### Start the app!
- `npm i` (or yarn if that suits your fancy)
- `react-native link` to load fonts
- `react-native run-ios` to build
- `npm run start-dev` to start with devtools
- When the simulator shows up, make sure to `cmd+d` and debug JS remotely
- 🎉

### Storybook
Storybook is a convenient tool for styling and composing components taken out of the context of their navigational flow. To utilize storybook, follow these steps:
- `yarn run storybook`
- In another terminal window, `react-native run-ios`
- In the simulator hit `cmd+d` and ensure that hot reloading is disabled and live reload is enabled
