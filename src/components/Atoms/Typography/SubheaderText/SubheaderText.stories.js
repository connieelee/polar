import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SubheaderText from './SubheaderText'

storiesOf('Atoms/Typography', module)
  .add('SubheaderText', () => (
    <SubheaderText>
      Subheader Text. Stuff stuff stuff text text brief description or something.
    </SubheaderText>
  ))
