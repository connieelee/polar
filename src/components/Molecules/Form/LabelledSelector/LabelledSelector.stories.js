import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  View,
} from 'react-native'

import LabelledSelector from './LabelledSelector'

storiesOf('Molecules/Form', module)
  .add('LabelledSelector', () => (
    <LabelledSelector>Choice A</LabelledSelector>
  ))
  .add('LabelledSelector Selected', () => (
    <LabelledSelector selected>Choice B</LabelledSelector>
  ))
  .add('SeveralSelectors', () => (
    <View style={{ flex: 1 }}>
      <LabelledSelector>Choice A</LabelledSelector>
      <LabelledSelector>Choice B</LabelledSelector>
      <LabelledSelector selected>Choice C</LabelledSelector>
    </View>
  ))
