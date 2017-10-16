import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'
import _ from 'lodash'

import {
  LabeledInput,
  AddAnswers,
  AddedAnswer,
  ToggleOption,
  ErrorText,
  TextIcon,
} from '../../../../components'

const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    marginBottom: 10,
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
      error: {
        question: '',
      },
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

  submit = () => {
    if(!this.findErrors()) {
      console.log('submit!')
    }
  }

  findErrors = () => {
    const error = {}
    if(this.state.answers.length < 2) error.answers = 'Please have at least two answers options.'
    if(!this.state.question) error.question = 'Please add question.'
    this.setState({
      error,
    })
    return !!Object.values(this.state.error)
      .filter(ele => ele)
      .length
  }

  render = () => (
    <View style={[StyleSheet.absoluteFill, styles.parent]}>
      <LabeledInput
        label="Question"
        value={this.state.question}
        onChangeText={this.changeQuestion}
        error={this.state.error.question}
      />
      <AddAnswers
        onPress={this.addAnswer}
        error={this.state.error.answers}
      />
      <ScrollView>
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
      </ScrollView>
      <TextIcon
        onPress={this.submit}
        name="check"
        bold
      >
        Continue
      </TextIcon>
    </View>
  )
}
