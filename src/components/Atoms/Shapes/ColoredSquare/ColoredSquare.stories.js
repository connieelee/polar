import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  Text,
} from 'react-native'

import ColoredSquare from './ColoredSquare'

storiesOf('Atoms/Shapes', module)
  .add('Colored Square', () => (
    <ColoredSquare><Text>Centered Content</Text></ColoredSquare>
  ))
  .add('colored square red', () => (
    <ColoredSquare backgroundColor="red">
      <Text>
        Centered white content
      </Text>
    </ColoredSquare>
  ))
