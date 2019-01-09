import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import BreadcrumbTrail from '../../BreadcrumbTrail'
import { Container } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'
// import { CaresContext } from '../../utils/CaresContext'
import { withCaresConfig } from '../../utils/CaresContext'

const renderBreadcrumbs = ({ breadcrumb, Breadcrumbs }) => {
  if (React.isValidElement(breadcrumb)) return breadcrumb
  if (typeof breadcrumb === 'function') return breadcrumb()
  if (Breadcrumbs) return <Breadcrumbs items={breadcrumb} />
  return null
  //   if (Array.isArray(breadcrumb)) return <Breadcrumbs items={breadcrumb} />
  //   // do nothing, handle with context-provided fn
  // } else if (typeof breadcrumb === 'function') {
  //   return breadcrumb()
  // }
  // return breadcrumb
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.renderBreadcrumbs = props.renderBreadcrumbs.bind(this)
  }

  render() {
    const {
      AppBar,
      PageHeader,
      Breadcrumbs,
      breadcrumb,
      BreadcrumbTrail,
      title,
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
        {breadcrumb !== false && (
          <div className={cn(Styles.BreadcrumbContainer)}>
            <Container>
              <BreadcrumbTrail items={breadcrumb} />
            </Container>
          </div>
        )}
      </div>
    )
  }
}

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  Breadcrumbs: PropTypes.func,
  title: PropTypes.string,
  breadcrumb: PropTypes.any,
  renderBreadcrumbs: PropTypes.func.isRequired,
  /** TODO */
  cta: PropTypes.any,
}

// Banner.contextType = CaresContext

Banner.defaultProps = {
  AppBar: AppBar,
  PageHeader: PageHeader,
  BreadcrumbTrail: BreadcrumbTrail,
  // BreadcrumbTrail: BreadcrumbTrail,
  renderBreadcrumbs: renderBreadcrumbs,
}

export { Banner }

export default withCaresConfig(Banner, ['Breadcrumbs'])
