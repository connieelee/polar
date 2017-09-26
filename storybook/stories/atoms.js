import React from 'react'
import { storiesOf } from '@storybook/react-native'

import {
  TextInput,
  FormLabel,
} from '../../src/components/Atoms'
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
  .add('FormLabel', () => <FormLabel>Label</FormLabel>)
