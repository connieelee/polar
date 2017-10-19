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
    color: colors.primary,
  },
  darkBtn: {
    backgroundColor: colors.light,
  },
  lightBtn: {
    backgroundColor: colors.accent1,
  },
})

const SecondaryButton = ({ onPress, children }, { theme }) => (
  <TouchableOpacity style={[styles.btn, styles[`${theme}Btn`]]} onPress={onPress}>
    <Text style={styles.btnText}>
      {children}
    </Text>
  </TouchableOpacity>
)

SecondaryButton.contextTypes = {
  theme: React.PropTypes.string,
}

export default SecondaryButton
