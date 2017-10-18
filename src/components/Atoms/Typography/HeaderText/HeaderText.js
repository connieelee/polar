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
  dark: {
    color: colors.accent1,
  },
  light: {
    color: colors.accent2,
  },
  text: {
    fontFamily: fonts.families.header,
    fontSize: fonts.sizes.large,
    textAlign: 'center',
    marginBottom: 20,
  },
})

const HeaderText = (props, context) => (
  <Text style={[styles.text, styles[context.theme]]}>
    {props.children}
  </Text>
)

HeaderText.contextTypes = {
  theme: React.PropTypes.string,
}

export default HeaderText
