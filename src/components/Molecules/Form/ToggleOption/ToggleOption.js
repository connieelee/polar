import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  FormLabel,
  Toggle,
} from '../../../Atoms'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: gStyles.width.medium,
  },
})

export default props => (
  <View style={styles.parent}>
    <FormLabel>{props.children}</FormLabel>
    <Toggle
      color={props.color}
      onPress={props.onPress}
      active={props.active}
      size={gStyles.width.tiny}
    />
  </View>
)
