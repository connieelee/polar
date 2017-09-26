import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react-native'

import {
  TextInput,
  FormLabel,
  FormButton,
  BodyText,
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
  .add('FormButton', () => (
    <FormButton>Click Me!</FormButton>
  ))

storiesOf('Atoms/Typography', module)
  .add('FormLabel', () => <FormLabel>Label</FormLabel>)
  .add('BodyText', () => <BodyText>Body Text</BodyText>)

