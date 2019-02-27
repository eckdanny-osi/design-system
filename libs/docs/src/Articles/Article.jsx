import React from 'react'
import PropTypes from 'prop-types'
import { Page } from '@cwds/components'
import SideNav from './ArticleSideNav'
import Breadcrumb from './ArticleBreadcrumb'

const Article = ({ title, main, sidebar, breadcrumbs }) => (
  <Page
    title={title}
    layout="subroutes"
    Breadcrumb={
      <Breadcrumb items={[{ title: 'Home', path: '/' }, ...breadcrumbs]} />
    }
    main={main}
    sidenav={<SideNav routes={sidebar} />}
  />
)

Article.propTypes = {
  title: PropTypes.string,
  main: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.func,
  ]),
  sidebar: PropTypes.array,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
}
Article.defaultProps = {
  title: '',
  breadcrumbs: [],
  sidebar: [],
}

export default Article
