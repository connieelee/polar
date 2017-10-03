import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ChosenAnimals from './ChosenAnimals'
import gStyles from '../../../styles'

const animals = [
  {
    id: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
    backgroundColor: gStyles.colors.primary,
  },
  {
    id: 2,
    imageUrl: 'http://dfp3r41v9wmfi.cloudfront.net/wp-content/uploads/Information_page.jpg',
    backgroundColor: gStyles.colors.green,
  },
]

storiesOf('Molecules/JoinPoll', module)
  .add('ChosenAnimals', () => (
    <ChosenAnimals animals={animals} />
  ))
