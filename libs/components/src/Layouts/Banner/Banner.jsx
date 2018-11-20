import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import BreadcrumbTrail from '../../BreadcrumbTrail'
import { Container } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'
import CaresContext from '../../utils/Cares'
import { JumpToTop } from '@cwds/components'

// const renderBreadcrumbDefault = itemsOrRenderFn => {
//   if (React.isValidElement(itemsOrRenderFn)) return itemsOrRenderFn
//   if (typeof itemsOrRenderFn === 'function') {
//     return itemsOrRenderFn()
//   }
//   if (Array.isArray(itemsOrRenderFn)) {
//     return <BreadcrumbTrail items={itemsOrRenderFn} />
//   }
//   throw new TypeError('Invalid argument: itemsOrRenderFn', 'Banner.jsx')
// }

const BreadcrumbContainer = ({ children }) => (
  <div className={cn(Styles.BreadcrumbContainer)}>
    <Container>{children}</Container>
  </div>
)

class Banner extends Component {
  renderBreadcrumbs = () => {
    const { breadcrumb } = this.props
    if (false === breadcrumb) {
      return null
    } else if (React.isValidElement(breadcrumb)) {
      return <BreadcrumbContainer>{breadcrumb}</BreadcrumbContainer>
    } else if (Array.isArray(breadcrumb)) {
      // do nothing, handle with context-provided fn
    } else if (typeof breadcrumb === 'function') {
      return <BreadcrumbContainer>{breadcrumb()}</BreadcrumbContainer>
    }
    return (
      <CaresContext.Consumer>
        {({ breadcrumbRenderer }) => (
          <BreadcrumbContainer>
            {breadcrumbRenderer(breadcrumb)}
          </BreadcrumbContainer>
        )}
      </CaresContext.Consumer>
    )
  }
  render() {
    const {
      AppBar,
      PageHeader,
      // BreadcrumbTrail,
      title,
      breadcrumb,
      // renderBreadcrumb = renderBreadcrumbDefault,
      cta,
    } = this.props
    return (
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
        {this.renderBreadcrumbs()}
        <JumpToTop />
      </div>
    )
  }
}

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  // BreadcrumbTrail: PropTypes.func,
  title: PropTypes.string,
  // breadcrumbItems: PropTypes.arrayOf(PropTypes.func),
}

Banner.contextType = CaresContext

Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  // BreadcrumbTrail: BreadcrumbTrail,
}

export default Banner
