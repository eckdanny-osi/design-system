import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Logo, Badge, BreadcrumbTrail } from '@cwds/components'
import getRepoStatus from './macros/repo-status.macro'
const status = getRepoStatus()

export const breadcrumbRenderer = items => {
  return !Array.isArray(items) ? (
    <em>Hello World</em>
  ) : (
    <BreadcrumbTrail
      items={items}
      tag={({ path, title, ...props }) => (
        <Link to={path} {...props}>
          {title}
        </Link>
      )}
    />
  )
}

//
// Configure Components
// TODO: Use CaresContext instead of side-effectful config
//
AppBar.config({
  brand: _ => (
    <React.Fragment>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/status" className="d-none d-sm-inline-block ml-2">
        <Badge color="primary">{status.version}</Badge>
      </Link>
    </React.Fragment>
  ),
})
