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
    marginHorizontal: gStyles.whiteSpace.medium,
  },
})

export default props => (
  <View style={styles.parent}>
    <FormLabel>{props.children}</FormLabel>
    <Toggle active={props.active} />
  </View>
)
