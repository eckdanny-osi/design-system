import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import AlertUncontrolled from './AlertUncontrolled'

storiesOf('Alerts', module)
  .addDecorator(withKnobs)
  .add(
    'AlertUncontrolled',
    withInfo()(() => (
      <AlertUncontrolled>
        <strong>Success!</strong> Your edits have been saved.
      </AlertUncontrolled>
    ))
  )
