import React from 'react'
import { storiesOf } from '@storybook/react-native'

import LandingPage from './LandingPage'

storiesOf('Screens', module)
  .add('LandingPage', () => <LandingPage navigation={{ navigate: ()=>{} }} />)
