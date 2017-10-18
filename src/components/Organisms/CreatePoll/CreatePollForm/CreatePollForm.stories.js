import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CreatePollForm from './CreatePollForm'

storiesOf('Organisms/CreatePoll', module)
  .add('Form', () => <CreatePollForm />)
