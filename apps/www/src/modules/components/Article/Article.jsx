import React from 'react'
import { Link } from 'react-router-dom'
import { Page, Breadcrumb, BreadcrumbItem } from '@cwds/components'
import SideNav from './ArticleSidenav'

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

export default Article
