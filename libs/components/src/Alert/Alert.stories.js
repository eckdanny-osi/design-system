import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

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
