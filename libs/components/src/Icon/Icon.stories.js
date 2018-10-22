import React from 'react'
import Icon from './Icon'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs'

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Icon',
    withInfo()(() => {
      return <Icon icon="spinner" size="6x" />
    })
  )
