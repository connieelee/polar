import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import gStyles from '../../../styles'

export default (props) => {
  const styles = StyleSheet.create({
    parent: {
      width: props.size || 40,
      height: props.size || 40,
      borderRadius: props.size || 40,
      backgroundColor: props.backgroundColor || gStyles.colors.blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: props.fontSize || 35,
      lineHeight: props.fontSize || 35,
      fontWeight: '700',
      color: props.color || 'white',
    },
  })

  return (
    <TouchableOpacity style={styles.parent} onPress={props.onPress}>
      <Text style={styles.text}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
}

