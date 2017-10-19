import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import { colors } from '../../styles';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  darkbg: {
    backgroundColor: colors.dark,
  },
  lightbg: {
    backgroundColor: colors.light,
  }
})

export default class ThemedView extends React.Component {
  getChildContext() {
    if (!this.props.theme) throw new Error('ThemedView expects prop "theme" but none was found')
    const supportedThemes = {
      light: true,
      dark: true,
    }
    if (!supportedThemes[this.props.theme]) {
      throw new Error(
        `ThemedView - no match for theme "${this.props.theme}".\n` + 
        `Valid theme options: [\n\t${Object.keys(supportedThemes).join(',\n\t')}\n]`
      )
    }
    return { theme: this.props.theme }
  }

  render() {
    return (
      <View style={[this.props.style, styles.flex1, styles[`${this.props.theme}bg`]]}>
        {this.props.children}
      </View>
    )
  }
}

ThemedView.childContextTypes = {
  theme: React.PropTypes.string,
}
