import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  button: {

  },
})

export default props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress} >
    {props.children}
  </TouchableOpacity>
)
