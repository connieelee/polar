import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ThemedView from './ThemedView'

storiesOf('Utilities/ThemedView', module)
  .add('Dark Theme', () => (
    <ThemedView theme="dark"></ThemedView>
  ))
  .adD('Light Theme', () => {
    <ThemedView theme="light"></ThemedView>
  })
  // need to flesh these stories out to test colors on nested children
