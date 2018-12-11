import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import Alert from './'

storiesOf('Alerts', module)
  .addDecorator(withKnobs)
  .add(
    'Alert',
    withInfo()(() => (
      <Alert>
        <strong>Success!</strong> Your edits have been saved.
      </Alert>
    ))
  )
