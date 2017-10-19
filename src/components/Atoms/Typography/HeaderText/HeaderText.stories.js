import React from 'react'
import { storiesOf } from '@storybook/react-native'

import HeaderText from './HeaderText'

storiesOf('Atoms/Typography', module)
  .add('HeaderText', () => (
    <HeaderText>Header Text</HeaderText>
  ))
