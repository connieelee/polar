import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  TinyButton,
  BodyText,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default props => (
  <View style={styles.parent}>
    <BodyText>{props.children}</BodyText>
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
