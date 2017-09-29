import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SignupInputs from './SignupInputs'

storiesOf('Organisms / Login|Signup', module)
  .add('SignupInputs', () => (
    <SignupInputs />
  ))
