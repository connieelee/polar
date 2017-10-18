import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import { colors } from '../../../styles';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: colors.dark,
  }
})

export default class DarkView extends React.Component {
  getChildContext() {
    return { theme: 'dark' }
  }

  render() {
    return (
      <View style={[this.props.style, styles.view]}>
        {this.props.children}
      </View>
    )
  }
}

DarkView.childContextTypes = {
  theme: React.PropTypes.string,
}
