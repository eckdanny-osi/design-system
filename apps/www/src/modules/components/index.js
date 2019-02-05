import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Page, Alert, ListGroup, ListGroupItem } from '@cwds/components'
import { getArticle } from './article-router'
import routes from './routes'
import { Breadcrumb, BreadcrumbItem } from '@cwds/reactstrap'

export default props => {
  const relativeRootUrl = props.match.url
  return (
    <Route
      path={`${relativeRootUrl}(.*)?`}
      render={props => {
        const article = getArticle(props.match.url, routes)
        if (!article) return <NotFound />
        return (
          <Page
            title={article.title}
            layout="subroutes"
            // Simple Anchors
            // Breadcrumb={() => (
            //   <Breadcrumb>
            //     {[{ title: 'Home', path: '/' }, ...article.breadcrumbs].map(
            //       d => (
            //         <BreadcrumbItem key={d.path}>
            //           <a href={d.path}>{d.title}</a>
            //         </BreadcrumbItem>
            //       )
            //     )}
            //   </Breadcrumb>
            // )}
            // React Router Links
            Breadcrumb={() => (
              <Breadcrumb>
                {[{ title: 'Home', path: '/' }, ...article.breadcrumbs].map(
                  d => (
                    <BreadcrumbItem key={d.path}>
                      <Link to={d.path}>{d.title}</Link>
                    </BreadcrumbItem>
                  )
                )}
              </Breadcrumb>
            )}
            main={article.main}
            sidenav={() => <Sidenav routes={article.sidebar} />}
          />
        )
      }}
    />
  )
}

const NotFound = () => (
  <Page
    title="Components"
    layout="dashboard"
    breadcrumb={[
      { title: 'Home', path: '/' },
      { title: 'Components', path: '/components' },
    ]}
    main={() => (
      <div>
        <Alert color="danger">Component not found!</Alert>
      </div>
    )}
  />
)

function Sidenav({ routes }) {
  if (!routes.length) return null
  return (
    <ListGroup>
      {routes.map(route => (
        <ListGroupItem
          action
          active={route.active}
          key={route.path}
          tag={Link}
          to={route.path}
        >
          {route.title}
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}
