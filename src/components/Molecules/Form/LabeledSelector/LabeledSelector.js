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
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
  },
})

export default props => (
  <View style={styles.parent}>
    <Selector selected={props.selected} onPress={props.onPress} />
    <BodyText>{props.children}</BodyText>
  </View>
)
