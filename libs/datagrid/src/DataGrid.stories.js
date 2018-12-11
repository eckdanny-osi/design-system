import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'

import DataGridExample from './DataGrid.example'

storiesOf('DataGrids', module)
  .addDecorator(withKnobs)
  .add('DataGrid', withInfo()(() => <DataGridExample />))
