import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SecondaryButton from './SecondaryButton'

storiesOf('Atoms/Buttons', module)
  .add('SecondaryButton', () => (
    <SecondaryButton>Secondary Button</SecondaryButton>
  ))
