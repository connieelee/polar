import React from 'react'
import { storiesOf } from '@storybook/react-native'

import BodyText from './BodyText'

storiesOf('Atoms/Typography', module)
  .add('BodyText', () => (
    <BodyText>BodyText</BodyText>
  ))
