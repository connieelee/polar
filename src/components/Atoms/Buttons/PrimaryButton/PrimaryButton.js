import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'


const styles = StyleSheet.create({

})

export default props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)
