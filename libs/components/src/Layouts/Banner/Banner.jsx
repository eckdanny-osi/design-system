import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import PageActions from '../../PageActions'
import BreadcrumbTrail from '../../BreadcrumbTrail'
import { Container, Breadcrumb } from '@cwds/reactstrap'
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
      PageActions,
      Breadcrumb: Shit,
      getBreadcrumbProps,
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
            <PageHeader title={title} cta={cta} PageActions={PageActions} />
          </Container>
        </div>
        {Shit !== false && (
          <div className={cn(Styles.BreadcrumbContainer)}>
            <Container>
              <Shit {...getBreadcrumbProps(this.props)} />
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
  PageActions: PropTypes.func,
  BreadcrumbTrail: PropTypes.func,
  Breadcrumbs: PropTypes.func,
  Breadcrumb: PropTypes.func.isRequired,
  getBreadcrumbProps: PropTypes.func.isRequired,
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
  PageActions,
  BreadcrumbTrail: BreadcrumbTrail,
  // BreadcrumbTrail: BreadcrumbTrail,
  renderBreadcrumbs: renderBreadcrumbs,
  Breadcrumb,
  getBreadcrumbProps: props => ({}),
}

export { Banner }

export default withCaresConfig(Banner, ['Breadcrumbs'])
