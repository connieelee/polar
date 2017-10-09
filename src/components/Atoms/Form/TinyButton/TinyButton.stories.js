import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  View,
  StyleSheet,
} from 'react-native'

import TinyButton from './TinyButton'

const style = StyleSheet.create({
  parent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})

storiesOf('Atoms/Form', module)
  .addDecorator(story => (
    <View style={[StyleSheet.absoluteFill, style.parent]}>
      {story()}
    </View>
  ))
  .add('TinyButton +', () => (
    <TinyButton backgroundColor="red">+</TinyButton>
  ))
  .add('TinyButton -', () => (
    <TinyButton>-</TinyButton>
  ))
