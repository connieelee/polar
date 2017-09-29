import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AnimalPicker from './AnimalPicker'

storiesOf('Molecules/JoinPoll', module)
  .add('AnimalPicker', () =>
    <AnimalPicker />,
  )
