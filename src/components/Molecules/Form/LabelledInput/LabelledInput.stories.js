import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabelledInput from './LabelledInput'

storiesOf('Molecule/LabelledInput', module)
  .add('LabelledInput', () => (
    <LabelledInput label="label" />
  ))
