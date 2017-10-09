import React from 'react'
import {
  View,
} from 'react-native'

import {
  LabelledSelector,
} from '../../../../components'

export default props => (
  <View>
    {
      props.options.map(option => (
        <LabelledSelector key={option}>{option}</LabelledSelector>
      ))
    }
  </View>
)
