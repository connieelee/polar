import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LabelledSelectorCollection from './LabelledSelectorCollection'

const options = [
  'A',
  'B',
  'C',
  'D',
]

storiesOf('Organisms/Poll', module)
  .add('LabelledSelectorCollection', () => (
    <LabelledSelectorCollection options={options} />
  ))
