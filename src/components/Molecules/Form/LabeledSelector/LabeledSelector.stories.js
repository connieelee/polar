import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  View,
} from 'react-native'

import LabeledSelector from './LabeledSelector'

storiesOf('Molecules/Form', module)
  .add('LabelledSelector', () => (
    <LabeledSelector>Choice A</LabeledSelector>
  ))
  .add('LabelledSelector Selected', () => (
    <LabeledSelector selected>Choice B</LabeledSelector>
  ))
  .add('SeveralSelectors', () => (
    <View style={{ flex: 1 }}>
      <LabeledSelector>Choice A</LabeledSelector>
      <LabeledSelector>Choice B</LabeledSelector>
      <LabeledSelector selected>Choice C</LabeledSelector>
    </View>
  ))
