import React from 'react'
import { BreadcrumbItem as BreadcrumbItemUnstyled } from 'reactstrap'
import Styles from './Breadcrumbs.module.scss'

const BreadcrumbItem = props => <BreadcrumbItemUnstyled {...props} />
BreadcrumbItem.propTypes = { ...BreadcrumbItemUnstyled.propTypes }
BreadcrumbItem.defaultProps = {
  ...BreadcrumbItemUnstyled.defaultProps,
  cssModule: Styles,
}

export default BreadcrumbItem
