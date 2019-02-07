import React from 'react'
import PropTypes from 'prop-types'
import { Page } from '@cwds/components'
import SideNav from './SideNav'
import Breadcrumb from './Breadcrumb'

const Article = ({ article }) => {
  const { title } = article
  return (
    <Page
      title={title}
      layout="subroutes"
      Breadcrumb={<Breadcrumb items={article.breadcrumbs} />}
      main={article.main}
      sidenav={<SideNav routes={article.sidebar} />}
    />
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}
Article.defaultProps = {
  article: {
    title: '',
  },
}

export default Article
