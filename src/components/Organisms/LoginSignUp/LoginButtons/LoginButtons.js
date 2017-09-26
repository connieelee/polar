import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  FormButton,
} from '../../../Atoms'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    height: 60,
  },
})

export default () => (
  <View style={styles.parent}>
    <FormButton>Sign Up</FormButton>
    <FormButton>Log In</FormButton>
  </View>
)
