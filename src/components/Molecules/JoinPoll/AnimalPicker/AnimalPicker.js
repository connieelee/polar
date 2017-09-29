import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  ColoredSquare,
} from '../../../../components'

// const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
})

export default () => (
  <View style={styles.parent}>
    <ColoredSquare backgroundColor="blue" />
  </View>
)
