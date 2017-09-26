import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LoginInputs from './LoginInputs'

storiesOf('Organisms/Login|Signup', module)
  .add('LoginInputs', () => (
    <LoginInputs />
  ))
