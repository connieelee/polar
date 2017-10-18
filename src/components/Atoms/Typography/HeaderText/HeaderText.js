import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import gStyles from '../../../styles';

const styles = StyleSheet.create({
  text: {
    color: gStyles.colors.accent1,
    fontFamily: gStyles.fonts.header,
    fontSize: gStyles.fontSizes.large,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
