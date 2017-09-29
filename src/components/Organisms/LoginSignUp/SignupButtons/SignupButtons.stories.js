import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SignupButtons from './SignupButtons'

storiesOf('Organisms / Login|Signup', module)
  .add('SignupButtons', () => (
    <SignupButtons />
  ))
