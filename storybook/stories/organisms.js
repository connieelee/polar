import React from 'react'
import {
  storiesOf,
  addDecorator,
} from '@storybook/react-native'

import {
  LoginForm,
} from '../../src/components/Organisms'
import CenterView from './CenterView'

addDecorator(story => <CenterView>{story()}</CenterView>)

storiesOf('Organsims/Login', module)
  .add('LoginForm', () => (
    <LoginForm />
  ))
