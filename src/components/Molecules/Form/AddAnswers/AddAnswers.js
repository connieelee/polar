import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'

import {
  FormLabel,
  TinyButton,
  TextInput,
} from '../../../../components'
import gStyles from '../../../styles'

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: gStyles.width.medium,
    justifyContent: 'space-between',
  },
  wrapper: {
    marginHorizontal: gStyles.whiteSpace.large,
    width: gStyles.width.medium,
    marginBottom: gStyles.whiteSpace.large,
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
    <View style={styles.wrapper}>
      <FormLabel>Answers</FormLabel>
      <View style={styles.parent}>
        <TextInput
          width={250}
          onChangeText={this.changeText}
          value={this.state.textField}
        />
        <TinyButton
          onPress={this.submit}
        >
          +
        </TinyButton>
      </View>
    </View>
  )
}

