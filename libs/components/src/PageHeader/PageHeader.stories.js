import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import PageHeader from './'

storiesOf('PageHeaders', module)
  .addDecorator(withKnobs)
  .add('PageHeader', withInfo()(() => <PageHeader />))
