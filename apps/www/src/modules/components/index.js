import React from 'react'
import { Route } from 'react-router-dom'
// import { getArticle } from './article-router'
import routes from './routes'
// import { Article, NotFound } from './Article'

import { Article, ArticleNotFound, articleUtils } from '@cwds/docs'

export default props => {
  const relativeRootUrl = props.match.url
  return (
    <Route
      path={`${relativeRootUrl}(.*)?`}
      render={props => {
        const article = articleUtils.getArticle(props.match.url, routes)
        if (!article) return <ArticleNotFound />
        return <Article article={article} />
      }}
    />
  )
}
