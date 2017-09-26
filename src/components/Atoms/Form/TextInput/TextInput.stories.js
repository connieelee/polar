import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TextInput from './TextInput'

storiesOf('Atoms/Form', module)
  .add('TextInput', () => (
    <TextInput />
  ))
