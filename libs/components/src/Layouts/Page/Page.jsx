import React from 'react'
import PropTypes from 'prop-types'
import Styles from '../Layout.module.scss'
import Banner from '../Banner'
import Body from '../Body'

const Page = ({ Banner, getBannerProps, Body, getBodyProps, ...props }) => {
  return (
    <div className={Styles.Page}>
      <Banner {...getBannerProps(props)} />
      <Body {...getBodyProps(props)} />
    </div>
  )
}

Page.propTypes = {
  /** Banner component */
  Banner: PropTypes.func,
  /** Extract Banner props from props */
  getBannerProps: PropTypes.func,
  /** Body component */
  Body: PropTypes.func,
  /** Extract Body props from props */
  getBodyProps: PropTypes.func,
  ...Banner.propTypes,
  ...Body.propTypes,
}

Page.defaultProps = {
  getBannerProps: getBannerProps,
  getBodyProps: getBodyProps,
  Banner,
  Body,
}

export default Page

//
// Helpers
//

function getBannerProps({ title, breadcrumb, cta }) {
  return { title, breadcrumb, cta }
}

function getBodyProps({ main, sidenav, layout }) {
  return { main, sidenav, layout }
}
