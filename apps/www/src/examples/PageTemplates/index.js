import React from 'react'
import { Route } from 'react-router-dom'

import PageStructure from './PageStructure'
import ContextOverrides from './ContextOverrides'

const routes = [
  {
    path: 'page-structure',
    component: PageStructure,
  },
  {
    path: 'context-overrides',
    component: ContextOverrides,
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
