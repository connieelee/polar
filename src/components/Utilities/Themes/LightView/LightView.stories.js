import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LightView from './LightView'

storiesOf('Utilities/Themes', module)
  .add('LightView', () => (
    <LightView></LightView>
  )) // need to flesh this out and make sure it's rendering nested children with correct colors
