import React from 'react'
import { Page } from '@cwds/components'
import Toggles from './Toggles'

export default () => (
  <Page
    title="Demo on Toggle Buttons"
    breadcrumb={[{ path: '/', title: 'Dashboard' }]}
    main={() => <Toggles />}
  />
)
