import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import Styles from '../Layout.module.scss'
import Banner from '../Banner'
import Body from '../Body'
import { renderElementOrComponent } from '../../utils'

const Page = ({ Banner, getBannerProps, Body, getBodyProps, ...props }) => {
  return (
    <div className={Styles.Page}>
      {renderElementOrComponent(Banner, props, getBannerProps)}
      {renderElementOrComponent(Body, props, getBodyProps)}
    </div>
  )
}

Page.propTypes = {
  /** Banner component */
  Banner: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** Extract Banner props from props */
  getBannerProps: PropTypes.func,
  /** Body component */
  Body: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  /** Extract Body props from props */
  getBodyProps: PropTypes.func,
  // ...Banner.propTypes,
  // ...Body.propTypes,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  Breadcrumbs: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  /** TODO: main prop description */
  main: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.element,
  ]),
}

Page.defaultProps = {
  getBannerProps: props => pick(props, ['title', 'PageActions', 'Breadcrumb']),
  getBodyProps: props => pick(props, ['main', 'sidenav', 'layout', 'children']),
  Banner,
  Body,
}

export default Page
