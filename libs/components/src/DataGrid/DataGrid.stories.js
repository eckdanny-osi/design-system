import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs'

import DataGrid from './'
import DataGridExample from './DataGrid.example'

storiesOf('DataGrids', module)
  .addDecorator(withKnobs)
  .add('DataGrid', withInfo()(() => <DataGridExample />))
