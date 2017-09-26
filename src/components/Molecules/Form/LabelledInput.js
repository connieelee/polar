import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  FormLabel,
  TextInput,
} from '../../Atoms'

const styles = StyleSheet.create({
})

export default props => (
  <View>
    <View>
      <FormLabel>{props.label}</FormLabel>
    </View>
    <TextInput />
  </View>
)
