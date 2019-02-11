import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import PageTitle from '../../PageTitle'
import Styles from '../Layout.module.scss'
import Banner from '../Banner'
import Body from '../Body'
import { renderElementOrComponent } from '../../utils'

/**
 * @todo throw a warning if `main` and `children` are passed
 */
const getBannerProps = props => ({
  ...pick(props, ['Brand', 'UserMenu', 'PageActions', 'Breadcrumb']),
  PageTitle: props.PageTitle || <PageTitle>{props.title}</PageTitle>,
})

const getBodyProps = props => ({
  ...pick(props, ['sidenav', 'layout']),
  main: props.main || props.children,
})

const Page = props => {
  return (
    <div className={Styles.Page}>
      {renderElementOrComponent(Banner, props, getBannerProps)}
      {renderElementOrComponent(Body, props, getBodyProps)}
    </div>
  )
}

Page.propTypes = {
  ...pick(Banner.propTypes, [
    'Brand',
    'UserMenu',
    'PageTitle',
    'PageActions',
    'Breadcrumb',
  ]),
  ...pick(Body.propTypes, ['sidenav', 'layout', 'main', 'children']),
  /** Shorthand for simple string PageTitles */
  title: PropTypes.string,
  // Banner: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Body: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // Breadcrumbs: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  // children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // main: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  // PageTitle: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  // title: PropTypes.string,
}
Page.defaultProps = {}

export default Page
