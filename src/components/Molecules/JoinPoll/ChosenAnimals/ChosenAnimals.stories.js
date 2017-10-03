import React from 'react'
import { storiesOf } from '@storybook/react-native'

import ChosenAnimals from './ChosenAnimals'
import gStyles from '../../../styles'

const animals = [
  {
    id: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
    backgroundColor: gStyles.colors.primary,
    order: 1,
  },
  {
    id: 2,
    imageUrl: 'http://dfp3r41v9wmfi.cloudfront.net/wp-content/uploads/Information_page.jpg',
    backgroundColor: gStyles.colors.green,
    order: 2,
  },
  {
    id: 1,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
    backgroundColor: gStyles.colors.primary,
    order: 3,
  },
]

storiesOf('Molecules/JoinPoll', module)
  .add('1 ChosenAnimals', () => (
    <ChosenAnimals animals={animals.slice(0, 1)} />
  ))
  .add('3 ChosenAnimals', () => (
    <ChosenAnimals animals={animals} />
  ))
