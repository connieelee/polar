import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ErrorText from './ErrorText'

storiesOf('Atoms/Typography', module)
  .add('ErrorText', () => (
    <ErrorText>ERROR!!!</ErrorText>
  ))
