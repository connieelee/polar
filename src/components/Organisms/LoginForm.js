import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  LabelledInput,
  FormButton,
} from '../../components'

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
  },
})

export default () => (
  <View style={styles.parent}>
    <LabelledInput label="Email" />
    <LabelledInput label="Password" />
    <View style={styles.horizontal}>
      <FormButton>Sign Up</FormButton>
      <FormButton>Log In</FormButton>
    </View>
  </View>
)
