/* eslint-disable global-require */

import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import { loadStories } from './storyLoader'

// const req = require.context('../src/components', true, /\.stories\.js$/)
// const loadStories = () => req.keys().forEach(fileName => req(fileName))

// import stories
configure(() => {
  loadStories()
  // require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: true });
AppRegistry.registerComponent('polar', () => StorybookUI);
export default StorybookUI;
