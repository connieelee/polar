import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  View,
} from 'react-native'

import AddedAnswer from './AddedAnswer'

storiesOf('Molecules/Form', module)
  .add('AddedAnswer', () => (
    <AddedAnswer>Mexican Food</AddedAnswer>
  ))
  .add('several Added Answer', () => (
    <View>
      <AddedAnswer>Mexican Food</AddedAnswer>
      <AddedAnswer>Mexican Fod</AddedAnswer>
      <AddedAnswer>Mexican Foo</AddedAnswer>
    </View>
  ))
