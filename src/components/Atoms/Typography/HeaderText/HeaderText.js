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
    fontSize: fonts.sizes.large,
    textAlign: 'center',
    marginBottom: 20,
  },
  dark: {
    color: colors.accent1,
  },
  light: {
    color: colors.accent2,
  },
})

const HeaderText = ({ children }, { theme }) => (
  <Text style={[styles.text, styles[theme]]}>
    {children}
  </Text>
)

HeaderText.contextTypes = {
  theme: React.PropTypes.string,
}

export default HeaderText
