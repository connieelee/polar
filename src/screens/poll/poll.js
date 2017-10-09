import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'

import {
  PollSubmit,
  TitleText,
  LabelledSelectorCollection,
} from '../../components'

const question = 'What food should we get next week?'
const choices = [
  'Mexican',
  'Asian',
  'Pizza',
  '1Mexican',
  'A2sian',
  'Pi3zza',
  'Mex4ican',
  'Asia5n',
  'Pizza6',
  '7Mexican',
  'A8sian',
  'Pi9zza',
  'Mex0ican',
  'Asia-n',
  'Pizz1a',
]

export default () => (
  <View style={StyleSheet.absoluteFill}>
    <ScrollView>
      <TitleText>{question}</TitleText>
      <LabelledSelectorCollection options={choices} />
    </ScrollView>
    <PollSubmit>This is my option!</PollSubmit>
  </View>
)
