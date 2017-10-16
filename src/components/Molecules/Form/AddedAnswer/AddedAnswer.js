import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  TinyButton,
  BodyText,
  SmallBodyText,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    width: gStyles.width.medium,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: gStyles.whiteSpace.small,
  },
})

export default props => (
  <View style={styles.parent}>
    <SmallBodyText>{props.children}</SmallBodyText>
    <TinyButton
      onPress={props.onPress}
      size={30}
      fontSize={20}
      backgroundColor={gStyles.colors.purple}
    >
      -
    </TinyButton>
  </View>
)
