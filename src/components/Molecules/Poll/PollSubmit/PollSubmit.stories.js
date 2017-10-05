import React from 'react'
import { storiesOf } from '@storybook/react-native'

import PollSubmit from './PollSubmit'

storiesOf('Molecules/Poll', module)
  .add('PollSubmit', () => (
    <PollSubmit>I chose this!</PollSubmit>
  ))
