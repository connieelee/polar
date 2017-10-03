import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import gStyle from '../../../styles'

const size = 160

export default (props) => {
  const styles = StyleSheet.create({
    shape: {
      backgroundColor: props.backgroundColor ? props.backgroundColor : gStyle.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      height: size,
      width: size,
      borderRadius: 300,
    },
  })

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.shape}
    >
      {props.children}
    </TouchableOpacity>
  )
}
