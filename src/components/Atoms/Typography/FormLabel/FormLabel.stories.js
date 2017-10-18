import React from 'react'
import { storiesOf } from '@storybook/react-native'

import FormLabel from './FormLabel'

storiesOf('Atoms/Typography', module)
  .add('FormLabel', () => (
    <FormLabel>Label</FormLabel>
  ))
  .add('FormLabel w/ Error', () => (
    <FormLabel error="Yowza! eRRR">I have an error</FormLabel>
  ))
