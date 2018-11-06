import React from 'react'
import cn from 'classnames'
import Icon from '@cwds/icons'
import Styles from './DataGrid.module.scss'

const NoDataText = () => (
  <div className={cn(Styles.Overlay, 'text-danger')}>
    <Icon
      icon="exclamation-triangle"
      size="2x"
      className={cn(Styles.Icon, 'mr-2')}
    />
    No Records Found!
  </div>
)

export default NoDataText
