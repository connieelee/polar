import React from 'react'
import { storiesOf } from '@storybook/react-native'

import FormLabel from './FormLabel'

storiesOf('Atoms/Form', module)
  .add('FormLabel', () => (
    <FormLabel>Label</FormLabel>
  ))
