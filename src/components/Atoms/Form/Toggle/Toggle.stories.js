import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Toggle from './Toggle'

storiesOf('Atoms/Form', module)
  .add('Toggle', () => (
    <Toggle />
  ))
  .add('Toggle Active', () => (
    <Toggle active />
  ))
