import React from 'react'
import { storiesOf } from '@storybook/react-native'

import FormLabel from './FormLabel'

storiesOf('Atoms/Typography', module)
  .add('FormLabel', () => (
    <FormLabel>Label</FormLabel>
  ))
