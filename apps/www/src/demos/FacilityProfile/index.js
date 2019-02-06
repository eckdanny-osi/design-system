import React from 'react'
import { Page } from '@cwds/components'

import Summary from './Summary'
import HomeInformation from './HomeInformation'
import LicensingApprovalWorker from './LicensingApprovalWorker'
import ChildrenPlaced from './ChildrenPlaced'
import ComplaintHistory from './ComplaintHistory'
import AssociatedPeople from './AssociatedPeople'
import ContactsSummary from './ContactsSummary'
import TrackingSummary from './TrackingSummary'

import Sidenav from './Sidenav'

export default () => (
  <Page
    title="Cambell Family Home - License Number / Family ID #123456789a"
    layout="jumpnav"
    breadcrumb={[
      { path: '/', title: 'Dashboard' },
      { path: '/rfa', title: 'RFA List' },
      { path: '/rfa/123456789a', title: 'Cambell Family Home' },
    ]}
    main={() => (
      <div>
        <Summary />
        <HomeInformation />
        <LicensingApprovalWorker />
        <ChildrenPlaced />
        <ComplaintHistory />
        <AssociatedPeople />
        <ContactsSummary />
        <TrackingSummary />
      </div>
    )}
    sidenav={Sidenav}
  />
)
