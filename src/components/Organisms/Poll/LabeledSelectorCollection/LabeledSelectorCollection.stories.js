import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabeledSelectorCollection from './LabeledSelectorCollection'

const options = [
  'A',
  'B',
  'C',
  'D',
]

storiesOf('Organisms/Poll', module)
  .add('LabelledSelectorCollection', () => (
    <LabeledSelectorCollection options={options} />
  ))
