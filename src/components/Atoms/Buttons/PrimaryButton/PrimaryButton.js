import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'

import {
  colors,
  fonts
} from '../../../styles';

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 13,
    marginHorizontal: 10,
  },
  darkBtn: {
    backgroundColor: colors.accent2,
  },
  lightBtn: {
    backgroundColor: colors.primary,
  },
  btnText: {
    fontSize: fonts.sizes.small,
    fontFamily: fonts.families.body,
    color: colors.light,
  },
})

const PrimaryButton = (props, context) => (
  <TouchableOpacity style={[styles.btn, styles[`${context.theme}Btn`]]} onPress={props.onPress}>
    <Text style={styles.btnText}>
      {props.children}
    </Text>
  </TouchableOpacity>
)

PrimaryButton.contextTypes = {
  theme: React.PropTypes.string,
}

export default PrimaryButton
