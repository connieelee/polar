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
  ToggleOption,
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
      anonymous: false,
      // { text, id }
      answers: [],
      question: '',
      error: {
        question: '',
        answers: '',
      },
    }
  }

  changeQuestion = question =>
    this.setState({
      question,
    })

  removeAnswer = id =>
    this.setState({
      answers: _.cloneDeep(this.state.answers.filter(answer => answer.id !== id)),
    })

  _duplicateAnswer = text =>
    !!this.state.answers.filter(answer => answer.text === text).length

  addAnswer = (text) => {
    if (text) {
      if (this._duplicateAnswer(text)) {
        this.setState({
          error: {
            answers: 'Oops answer\'s already there.',
          },
        })
      } else {
        this.lastId = this.lastId + 1
        const toAdd = _.cloneDeep([...this.state.answers, { text, id: this.lastId }])
        this.setState({
          answers: toAdd,
          error: {
            answers: '',
          },
        })
      }
    } else {
      this.setState({
        error: {
          answers: 'Please enter in text.',
        },
      })
    }
  }

  render = () => (
    <View style={[StyleSheet.absoluteFill, styles.parent]}>
      <LabeledInput
        label="Question"
        value={this.state.question}
        onChangeText={this.changeQuestion}
      />
      <ToggleOption
        onPress={() => this.setState({ anonymous: !this.state.anonymous })}
        active={this.state.anonymous}
      >
        Responses are anonymous?
      </ToggleOption>
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
      <ErrorText>{this.state.error.answers}</ErrorText>
    </View>
  )
}
