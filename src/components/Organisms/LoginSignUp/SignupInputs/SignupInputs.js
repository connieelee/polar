import React from 'react'
import {
  View,
} from 'react-native'

import {
  LabeledInput,
} from '../../../../components'

export default () => (
  <View>
    <LabeledInput
      label="Email"
      textInput={{
        autoCapitalize: 'none',
        keyboardType: 'email-address',
      }}
    />
    <LabeledInput
      label="Confirm Email"
      textInput={{
        autoCapitalize: 'none',
        keyboardType: 'email-address',
      }}
    />
    <LabeledInput
      label="Password"
      textInput={{
        autoCapitalize: 'none',
        autoCorrect: false,
        secureTextEntry: true,
      }}
    />
  </View>
)
