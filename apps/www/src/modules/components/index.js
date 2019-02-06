import React from 'react'
import { Route } from 'react-router-dom'
import { getArticle } from './article-router'
import routes from './routes'
import { Article, NotFound } from './Article'

export default props => {
  const relativeRootUrl = props.match.url
  return (
    <Route
      path={`${relativeRootUrl}(.*)?`}
      render={props => {
        const article = getArticle(props.match.url, routes)
        if (!article) return <NotFound />
        return <Article article={article} />
      }}
    />
  )
}
