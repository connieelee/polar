import React from 'react'
import { storiesOf } from '@storybook/react-native'

import PrimaryButton from './PrimaryButton'

storiesOf('Atoms/Buttons', module)
  .add('PrimaryButton', () => (
    <PrimaryButton>Primary Button</PrimaryButton>
  ))
