import React from 'react'
import { storiesOf } from '@storybook/react-native'

import Poll from './poll'

storiesOf('Screens', module)
  .add('Poll', () => (
    <Poll />
  ))
