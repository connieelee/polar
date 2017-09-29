import React from 'react'
import { storiesOf } from '@storybook/react-native'

import FormButton from './FormButton'

storiesOf('Atoms/Form', module)
  .add('FormButton', () => (
    <FormButton>Click Me!</FormButton>
  ))
