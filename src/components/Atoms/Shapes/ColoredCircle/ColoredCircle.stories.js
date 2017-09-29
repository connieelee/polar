import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  Text,
} from 'react-native'

import ColoredCircle from './ColoredCircle'

storiesOf('Atoms/Shapes', module)
  .add('ColoredCircle', () =>
    <ColoredCircle><Text>Centered Text</Text></ColoredCircle>,
  )
