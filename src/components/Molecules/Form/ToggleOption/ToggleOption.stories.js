import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ToggleOption from './ToggleOption'

storiesOf('Molecules/ToggleOption', module)
  .add('ToggleOption', () => (
    <ToggleOption>Option 1</ToggleOption>
  ))
  .add('ToggleOption active', () => (
    <ToggleOption active>Active</ToggleOption>
  ))
