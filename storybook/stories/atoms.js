import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react-native'

import {
  TextInput,
  FormLabel,
} from '../../src/components/Atoms'
import CenterView from './CenterView'

addDecorator(story => (
  <CenterView>
    {story()}
  </CenterView>
))

storiesOf('Atoms/Form', module)
  .add('TextInput', () => (
    <TextInput />
  ))

storiesOf('Atoms/Typography', module)
  .add('FormLabel', () => <FormLabel>Label</FormLabel>)
