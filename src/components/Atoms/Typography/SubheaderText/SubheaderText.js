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
    fontFamily: fonts.families.header,
    fontSize: fonts.sizes.medium,
    textAlign: 'center',
  },
  dark: {
    color: colors.light,
  },
  light: {
    color: colors.primary,
  },
})

const SubheaderText = ({ children }, { theme }) => (
  <Text style={[styles.text, styles[theme]]}>
    {children}
  </Text>
)

SubheaderText.contextTypes = {
  theme: React.PropTypes.string,
}

export default SubheaderText
