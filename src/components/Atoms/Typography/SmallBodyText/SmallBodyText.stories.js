import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SmallBodyText from './SmallBodyText'

storiesOf('Atoms/Typography', module)
  .add('Small Body Text', () => (
    <SmallBodyText>SmallText</SmallBodyText>
  ))
