import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import BreadcrumbTrail from '../../BreadcrumbTrail'
import { Container } from 'reactstrap'
import Styles from '../Layout.module.scss'

const renderBreadcrumbDefault = itemsOrRenderFn => {
  if (React.isValidElement(itemsOrRenderFn)) return itemsOrRenderFn
  if (typeof itemsOrRenderFn === 'function') {
    return itemsOrRenderFn()
  }
  if (Array.isArray(itemsOrRenderFn)) {
    return <BreadcrumbTrail items={itemsOrRenderFn} />
  }
  throw new TypeError('Invalid argument: itemsOrRenderFn', 'Banner.jsx')
}

const Banner = ({
  AppBar,
  PageHeader,
  BreadcrumbTrail,
  title,
  breadcrumb,
  renderBreadcrumb = renderBreadcrumbDefault,
  cta,
}) => (
  <div role="banner" className={cn(Styles.Banner)}>
    <div className={cn(Styles.AppBarContainer)}>
      <Container>
        <AppBar />
      </Container>
    </div>
    <div className={cn(Styles.PageHeaderContainer)}>
      <Container>
        <PageHeader title={title} cta={cta} />
      </Container>
    </div>
    {breadcrumb && (
      <div className={cn(Styles.BreadcrumbContainer)}>
        <Container>{renderBreadcrumb(breadcrumb)}</Container>
      </div>
    )}
  </div>
)

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  title: PropTypes.string,
  breadcrumbItems: PropTypes.arrayOf(PropTypes.func),
}

Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  BreadcrumbTrail: BreadcrumbTrail,
}

export default Banner
