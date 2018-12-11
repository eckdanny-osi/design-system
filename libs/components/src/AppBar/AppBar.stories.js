import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import AppBar from './'

storiesOf('AppBars', module)
  .addDecorator(withKnobs)
  .add('AppBar', withInfo()(() => <AppBar />))
