import React from 'react'
import { ReactTableDefaults } from 'react-table'
import { Util } from '@cwds/reactstrap'

import Pagination from './Pagination'
import LoadingText from './LoadingText'
import NoDataText from './NoDataText'
import PagerButtonFactory from './PagerButtonFactory'

/* eslint-disable no-magic-numbers */
const PAGE_SIZES = [5, 10, 25, 50]
/* eslint-enable no-magic-numbers */

const DataGridDefaults = {
  NextComponent: PagerButtonFactory({ rotation: Util.ROTATION.LEFT }),
  PaginationComponent: Pagination,
  PreviousComponent: PagerButtonFactory({ rotation: Util.ROTATION.RIGHT }),
  defaultPageSize: 10,
  pageSizeOptions: PAGE_SIZES,
  // LoadingComponent: LoadingIndicator,
  loadingText: <LoadingText />,
  noDataText: <NoDataText />,
  minRows: 1,
}

export const config = config =>
  Object.assign(ReactTableDefaults, DataGridDefaults, config)
