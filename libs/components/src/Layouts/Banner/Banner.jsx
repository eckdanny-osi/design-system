import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import PageActions from '../../PageActions'
import { Container } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'
import { withCaresConfig } from '../../utils/CaresContext'

const Banner = props => {
  const {
    AppBar,
    PageHeader,
    PageActions,
    Breadcrumb,
    getBreadcrumbProps,
    title,
  } = props
  return (
    <div role="banner" className={cn(Styles.Banner)}>
      <div className={cn(Styles.AppBarContainer)}>
        <Container>
          <AppBar />
        </Container>
      </div>
      <div className={cn(Styles.PageHeaderContainer)}>
        <Container>
          <PageHeader title={title} PageActions={PageActions} />
        </Container>
      </div>
      {Breadcrumb !== false && (
        <div className={cn(Styles.BreadcrumbContainer)}>
          <Container style={{ overflowX: 'scroll' }}>
            <Breadcrumb {...getBreadcrumbProps(props)} />
          </Container>
        </div>
      )}
    </div>
  )
}

Banner.propTypes = {
  AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  PageActions: PropTypes.func,
  Breadcrumb: PropTypes.func.isRequired,
  getBreadcrumbProps: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Banner.defaultProps = {
  AppBar,
  PageHeader,
  PageActions,
  Breadcrumb: () => '',
  getBreadcrumbProps: props => ({}),
}

export { Banner }

export default withCaresConfig(Banner, ['Breadcrumbs'])
