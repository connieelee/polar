import React from 'react'
import {
  Text,
  StyleSheet,
} from 'react-native'

import { fonts } from '../../../styles'

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.families.body,
    fontSize: fonts.sizes.small,
  },
})

export default props => <Text style={styles.text}>{props.children}</Text>
