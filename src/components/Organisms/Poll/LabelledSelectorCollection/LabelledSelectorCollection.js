import React from 'react'
import {
  ScrollView,
} from 'react-native'

import {
  LabelledSelector,
} from '../../../../components'

export default props => (
  <ScrollView>
    {
      props.options.map(option => (
        <LabelledSelector key={option}>{option}</LabelledSelector>
      ))
    }
  </ScrollView>
)
