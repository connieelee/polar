import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  ColoredCircle,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default () => (
  <View style={styles.parent}>
    {
      Object.values(gStyles.colors).map(color => (
        <ColoredCircle key={color} backgroundColor={color} />
      ))
    }
  </View>
)