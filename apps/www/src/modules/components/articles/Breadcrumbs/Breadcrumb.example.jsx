import { BreadcrumbTrail } from '@cwds/components'
import React from 'react'

const items = [
  { path: '/', title: 'Dashboard' },
  { path: '/components', title: 'Components' },
  { path: '#', title: 'Breadcrumbs' },
]

const disabledItems = [
  { title: 'Dashboard' },
  { title: 'Components' },
  { title: 'Breadcrumbs' },
]

export const BreadcrumbExample = () => <BreadcrumbTrail items={items} />

export const DisabledBreadcrumbs = () => (
  <BreadcrumbTrail items={disabledItems} />
)
