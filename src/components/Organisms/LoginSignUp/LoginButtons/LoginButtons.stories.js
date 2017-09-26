import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LoginButtons from './LoginButtons'

storiesOf('Organisms / Login|Signup', module)
  .add('LoginButtons', () => <LoginButtons />)
