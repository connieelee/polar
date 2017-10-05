import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  BodyText,
  Selector,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 2,
  },
})

export default props => (
  <View style={styles.parent}>
    <Selector selected={props.selected} onPress={props.onPress} />
    <BodyText>{props.children}</BodyText>
  </View>
)
