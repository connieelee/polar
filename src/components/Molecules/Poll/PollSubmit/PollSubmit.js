import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  BodyText,
  FormButton,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textWrapper: {
    width: 200,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
})

export default props => (
  <View style={styles.parent}>
    <View style={styles.textWrapper}>
      <BodyText>{props.children}</BodyText>
    </View>
    <FormButton onPress={props.onPress}>Submit</FormButton>
  </View>
)
