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
  btnText: {
    fontSize: fonts.sizes.small,
    fontFamily: fonts.families.body,
    color: colors.light,
  },
  darkBtn: {
    backgroundColor: colors.accent2,
  },
  lightBtn: {
    backgroundColor: colors.primary,
  },
})

const PrimaryButton = ({ onPress, children }, { theme }) => (
  <TouchableOpacity style={[styles.btn, styles[`${theme}Btn`]]} onPress={onPress}>
    <Text style={styles.btnText}>
      {children}
    </Text>
  </TouchableOpacity>
)

PrimaryButton.contextTypes = {
  theme: React.PropTypes.string,
}

export default PrimaryButton
