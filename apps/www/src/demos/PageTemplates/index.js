import React from 'react'
import { Route } from 'react-router-dom'

import PageStructure from './PageStructure'

const routes = [
  {
    path: 'page-structure',
    component: PageStructure,
  },
]

export default props => {
  return routes.map(route => (
    <Route
      key={route.path}
      path={`${props.match.url}/${route.path}`}
      component={route.component}
    />
  ))
}
