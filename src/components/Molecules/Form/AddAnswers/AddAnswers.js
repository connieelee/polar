import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  LabeledInput,
  TinyButton,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: gStyles.whiteSpace.large,
    justifyContent: 'space-between',
    width: gStyles.width.medium,
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
        width={250}
      />
      <TinyButton
        onPress={this.submit}
      >
        +
      </TinyButton>
    </View>
  )
}

