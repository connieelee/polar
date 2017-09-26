import React from 'react'
import { storiesOf } from '@storybook/react-native'

import {
  LabelledInput,
} from '../../src/components/Molecules'
import CenterView from './CenterView'

storiesOf('Molecules/Form', module)
  .addDecorator(story => (
    <CenterView>
      {story()}
    </CenterView>
  ))
  .add('LabelledInput', () => (
    <LabelledInput label="Label" />
  ))
