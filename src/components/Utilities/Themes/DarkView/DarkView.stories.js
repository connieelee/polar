import React from 'react'
import { storiesOf } from '@storybook/react-native'

import DarkView from './DarkView'

storiesOf('Utilities/Themes', module)
  .add('DarkView', () => (
    <DarkView></DarkView>
  )) // need to flesh this out and make sure it's rendering nested children with correct colors
