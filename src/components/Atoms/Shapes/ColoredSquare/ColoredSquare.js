import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import gStyle from '../../../styles'

export default (props) => {
  const styles = StyleSheet.create({
    view: {
      backgroundColor: props.backgroundColor ? props.backgroundColor : gStyle.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
  })

  return (
    <View style={styles.view}>{props.children}</View>
  )
}
