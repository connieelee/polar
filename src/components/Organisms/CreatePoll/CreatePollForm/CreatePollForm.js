import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import _ from 'lodash'

import {
  LabeledInput,
  AddAnswers,
  AddedAnswer,
  ErrorText,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
  },
})

export default class extends React.Component {
  constructor() {
    super()
    this.lastId = 0
    this.state = {
      answers: [],
      error: '',
      // { text, id }
    }
  }

  removeAnswer = id =>
    this.setState({
      answers: _.cloneDeep(this.state.answers.filter(answer => answer.id !== id)),
    })


  addAnswer = (text) => {
    if (text) {
      this.lastId = this.lastId + 1
      const toAdd = _.cloneDeep([...this.state.answers, { text, id: this.lastId }])
      this.setState({
        answers: toAdd,
      })
    }
  }

  render = () => (
    <View style={[StyleSheet.absoluteFill, styles.parent]}>
      <LabeledInput
        label="Question"
      />
      <AddAnswers onPress={this.addAnswer} />
      {
        this.state.answers.map(answer => (
          <AddedAnswer
            key={answer.id}
            onPress={() => this.removeAnswer(answer.id)}
          >
            {answer.text}
          </AddedAnswer>
        ))
      }
      {
        !!this.state.error.length && <ErrorText>{this.state.error}</ErrorText>
      }
    </View>
  )
}
