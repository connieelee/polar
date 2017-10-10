import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  LabeledInput,
  TinyButton,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
})

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textField: '',
    }
  }

  changeText = (textField) =>
    this.setState({ textField })

  submit = () => {
    this.props.onPress(this.state.textField)
    this.setState({ textField: '' })
  }

  render = () => (
    <View style={styles.parent}>
      <LabeledInput
        label="Answers"
        onChangeText={this.changeText}
        value={this.state.textField}
      />
      <TinyButton
        onPress={this.submit}
      >
        +
      </TinyButton>
    </View>
  )
}

