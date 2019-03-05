import React from 'react'
import { Page, Alert } from '@cwds/components'

import MessageArea from './MessageArea'

import Sidenav from './Sidenav'

export default () => (
  <Page
    title="Sticky Message Area Placeholder"
    layout="jumpnav"
    breadcrumb={[{ path: '/', title: 'Dashboard' }]}
    main={() => (
      <div>
        <MessageArea />
      </div>
    )}
    message={<Alert color="success">Hello</Alert>}
    sidenav={Sidenav}
  />
)
