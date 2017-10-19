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
    color: colors.light,
  },
  light: {
    color: colors.primary,
  },
  text: {
    fontFamily: fonts.families.header,
    fontSize: fonts.sizes.medium,
    textAlign: 'center',
  },
})

const SubheaderText = (props, context) => (
  <Text style={[styles.text, styles[context.theme]]}>
    {props.children}
  </Text>
)

SubheaderText.contextTypes = {
  theme: React.PropTypes.string,
}

export default SubheaderText
