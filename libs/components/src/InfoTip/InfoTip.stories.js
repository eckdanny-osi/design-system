import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import Infotip from './'

storiesOf('Infotips', module)
  .addDecorator(withKnobs)
  .add(
    'Infotip',
    withInfo()(() => (
      <div>
        <p>
          Need some inline help regarding a partiular item?
          <br />
          Consider using an <tt>Infotip</tt>.
        </p>
        <p>
          There is an <tt>Infotip</tt> following this statement
          <Infotip text="Hello from the Infotip again!" />
        </p>
      </div>
    ))
  )
