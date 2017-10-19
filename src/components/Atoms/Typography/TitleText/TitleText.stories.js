import React from 'react'
import { storiesOf } from '@storybook/react-native'
import {
  View,
} from 'react-native'

import TitleText from './TitleText'

storiesOf('Atoms/Typography', module)
  .add('TitleText', () => (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <TitleText>What time should we get food?</TitleText>
    </View>
  ))
