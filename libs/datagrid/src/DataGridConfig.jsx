import React, { Fragment } from 'react'
import { Button } from '@cwds/reactstrap'
import { ReactTableDefaults } from 'react-table/lib'
import Pagination from './Pagination'

import LoadingText from './LoadingText'
import NoDataText from './NoDataText'
import PagerButtonFactory from './PagerButtonFactory'

const DataGridDefaults = {
  NextComponent: PagerButtonFactory({ rotation: 270 }),
  PaginationComponent: Pagination,
  PreviousComponent: PagerButtonFactory({ rotation: 90 }),
  defaultPageSize: 10,
  pageSizeOptions: [5, 10, 25, 50],
  // LoadingComponent: LoadingIndicator,
  loadingText: <LoadingText />,
  noDataText: <NoDataText />,
}

export const config = config =>
  Object.assign(ReactTableDefaults, DataGridDefaults, config)
