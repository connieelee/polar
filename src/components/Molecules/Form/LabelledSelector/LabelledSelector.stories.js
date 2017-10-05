import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabelledSelector from './LabelledSelector'

storiesOf('Molecules/Form', module)
  .add('LabelledSelector', () => (
    <LabelledSelector>Choice A</LabelledSelector>
  ))
  .add('LabelledSelector Selected', () => (
    <LabelledSelector selected>Choice B</LabelledSelector>
  ))
