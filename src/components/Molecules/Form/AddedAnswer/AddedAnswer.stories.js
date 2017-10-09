import React from 'react'
import { storiesOf } from '@storybook/react-native'

import AddedAnswer from './AddedAnswer'
import { Center } from '../../../Util'

storiesOf('Molecules/Form', module)
  .addDecorator(story => (
    <Center>
      {story()}
    </Center>
  ))
  .add('AddedAnswer', () => (
    <AddedAnswer>Mexican Food</AddedAnswer>
  ))
