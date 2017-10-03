import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  ColoredSquare,
} from '../../../../components'
import gStyles from '../../../styles'

// const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
})

export default () => (
  <View style={styles.parent}>
    {
      Object.values(gStyles.colors).map(color => (
        <ColoredSquare backgroundColor={color} />
      ))
    }
  </View>
)
