import React from 'react'
import {
  View,
} from 'react-native'

import {
  LabeledSelector,
} from '../../../../components'

export default props => (
  <View>
    {
      props.options.map(option => (
        <LabeledSelector key={option}>{option}</LabeledSelector>
      ))
    }
  </View>
)
