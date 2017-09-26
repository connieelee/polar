import React from 'react'
import {
  View,
} from 'react-native'

import {
  LabelledInput,
} from '../../../../components'

export default () => (
  <View>
    <LabelledInput
      label="Email"
      textInput={{
        autoCapitalize: 'none',
        keyboardType: 'email-address',
      }}
    />
    <LabelledInput
      label="Password"
      textInput={{
        autoCapitalize: 'none',
        autoCorrect: false,
        secureTextEntry: true,
      }}
    />
  </View>
)
