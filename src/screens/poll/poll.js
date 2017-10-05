import React from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  FormButton,
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
    <TitleText>{question}</TitleText>
    <LabelledSelectorCollection options={choices} />
    <FormButton>Submit</FormButton>
  </View>
)
