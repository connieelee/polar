import React from 'react'
import { storiesOf } from '@storybook/react-native'

import {
  TextInput,
} from '../../src/components'
import CenterView from './CenterView'

storiesOf('Atoms/Form', module)
  .addDecorator(story => (
    <CenterView>
      {story()}
    </CenterView>
  ))
  .add('TextInput', () => (
    <TextInput />
  ))
