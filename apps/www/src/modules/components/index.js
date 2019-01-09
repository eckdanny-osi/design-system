import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Page, Alert, ListGroup, ListGroupItem } from '@cwds/components'
import { getArticle } from './article-router'
import routes from './routes'

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
            breadcrumb={[{ title: 'Home', path: '/' }, ...article.breadcrumbs]}
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
