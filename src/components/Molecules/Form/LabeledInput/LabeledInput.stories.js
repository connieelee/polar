import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabeledInput from './LabeledInput'

storiesOf('Molecules/LabeledInput', module)
  .add('LabeledInput', () => (
    <LabeledInput label="label" />
  ))
