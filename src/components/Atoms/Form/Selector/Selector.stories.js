import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Selector from './Selector'

storiesOf('Atoms/Form', module)
  .add('Selector', () => (
    <Selector />
  ))
  .add('Selector Selected', () => (
    <Selector selected />
  ))
