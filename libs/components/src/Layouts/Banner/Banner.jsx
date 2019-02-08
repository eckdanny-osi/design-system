import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import AppBar from '../../AppBar'
import PageHeader from '../../PageHeader'
import PageActions from '../../PageActions'
import { Container } from '@cwds/reactstrap'
import Styles from '../Layout.module.scss'
import { withCaresConfig } from '../../utils/CaresContext'
import { renderElementOrComponent } from '../../utils/renderElementOrComponent'

const Banner = props => {
  const {
    // AppBar,
    Brand,
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
          <AppBar {...pick(props, ['Brand', 'UserMenu'])} />
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
            {renderElementOrComponent(Breadcrumb, props, getBreadcrumbProps)}
          </Container>
        </div>
      )}
    </div>
  )
}

Banner.propTypes = {
  // AppBar: PropTypes.func,
  PageHeader: PropTypes.func,
  PageActions: PageHeader.propTypes.PageActions,
  Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  Breadcrumb: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  getBreadcrumbProps: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Banner.defaultProps = {
  // AppBar,
  PageHeader,
  PageActions,
  Breadcrumb: () => '',
  getBreadcrumbProps: props => ({}),
}

export { Banner }

export default withCaresConfig(Banner, ['Breadcrumbs'])
