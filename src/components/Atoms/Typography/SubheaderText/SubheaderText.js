import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import {
  colors,
  fonts,
} from '../../../styles';

const styles = StyleSheet.create({
  text: {
    color: colors.light,
    fontFamily: fonts.families.header,
    fontSize: fonts.sizes.medium,
    textAlign: 'center',
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
