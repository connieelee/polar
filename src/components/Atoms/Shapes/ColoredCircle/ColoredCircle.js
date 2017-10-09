import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

import gStyle from '../../../styles'

const defaultSize = 160

export default (props) => {
  const styles = StyleSheet.create({
    shape: {
      backgroundColor: props.backgroundColor ? props.backgroundColor : gStyle.colors.blue,
      alignItems: 'center',
      justifyContent: 'center',
      height: props.size || defaultSize,
      width: props.size || defaultSize,
      borderRadius: props.size || defaultSize,
      margin: 10,
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
