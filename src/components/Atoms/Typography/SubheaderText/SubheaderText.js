import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import gStyles from '../../../styles';

const styles = StyleSheet.create({
  text: {
    color: gStyles.colors.light,
    fontFamily: gStyles.fonts.header,
    fontSize: gStyles.fontSizes.medium,
    textAlign: 'center',
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
