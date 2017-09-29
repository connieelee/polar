import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabelledInput from './LabelledInput'

storiesOf('Molecules/LabelledInput', module)
  .add('LabelledInput', () => (
    <LabelledInput label="label" />
  ))
