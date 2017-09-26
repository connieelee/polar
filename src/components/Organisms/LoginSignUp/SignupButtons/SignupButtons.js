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
    <FormButton>Log In</FormButton>
    <FormButton>Submit</FormButton>
  </View>
)
