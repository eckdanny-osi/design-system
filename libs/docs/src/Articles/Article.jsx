import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Page, Breadcrumb, BreadcrumbItem } from '@cwds/components'
import SideNav from './SideNav'

const Article = ({ article }) => {
  const { title } = article
  return (
    <Page
      title={title}
      layout="subroutes"
      Breadcrumb={() => (
        <Breadcrumb>
          {[{ title: 'Home', path: '/' }, ...article.breadcrumbs].map(d => (
            <BreadcrumbItem key={d.path}>
              <Link to={d.path}>{d.title}</Link>
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
      main={article.main}
      sidenav={() => <SideNav routes={article.sidebar} />}
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
