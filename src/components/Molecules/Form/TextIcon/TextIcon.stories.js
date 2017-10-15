import React from 'react'
import { storiesOf } from '@storybook/react-native'

import TextIcon from './TextIcon'

storiesOf('Molecules/Form', module)
  .add('TextIcon', () => (
    <TextIcon name="check">Continue</TextIcon>
  ))
  .add('Bold TextIcon', () => (
    <TextIcon bold name="check">Bold</TextIcon>
  ))
