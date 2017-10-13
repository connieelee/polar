import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TextIcon from './TextIcon'

storiesOf('Atoms/Form', module)
  .add('TextIcon', () => (
    <TextIcon name="check">Continue</TextIcon>
  ))
