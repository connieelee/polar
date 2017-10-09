import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AddedAnswer from './AddedAnswer'

storiesOf('Molecules/Form', module)
  .add('AddedAnswer', () => (
    <AddedAnswer>Mexican Food</AddedAnswer>
  ))
