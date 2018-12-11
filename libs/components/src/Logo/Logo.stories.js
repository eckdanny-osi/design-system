import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import Logo from './'

storiesOf('Logos', module)
  .addDecorator(withKnobs)
  .add('Logo', withInfo()(() => <Logo />))
