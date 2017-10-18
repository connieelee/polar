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
    color: colors.accent1,
    fontFamily: fonts.families.header,
    fontSize: fonts.sizes.large,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
