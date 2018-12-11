import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../Layout.module.scss'
import Banner from '../Banner'
import Body from '../Body'
import pick from 'lodash.pick'

const getBannerProps = props => pick(props, ['title', 'breadcrumb', 'cta'])

const getBodyProps = props => pick(props, ['main', 'sidenav', 'layout'])

const Page = props => {
  return (
    <div className={Styles.Page}>
      <Banner {...props.getBannerProps(props)} />
      <Body {...props.getBodyProps(props)} />
    </div>
  )
}

Page.propTypes = {
  ...Banner.propTypes,
  getBannerProps: PropTypes.func,
  ...Body.propTypes,
  getBodyProps: PropTypes.func,
}

Page.defaultProps = {
  getBannerProps: getBannerProps,
  getBodyProps: getBodyProps,
}

export default Page
