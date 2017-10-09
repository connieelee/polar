import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import gStyle from '../../../styles'

export default (props) => {
  const styles = StyleSheet.create({
    view: {
      backgroundColor: props.backgroundColor || gStyle.colors.blue,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      marginHorizontal: props.marginHorizontal || 0,
      marginVertical: props.marginVertical || 0,
    },
  })

  return (
    <View style={styles.view}>{props.children}</View>
  )
}
