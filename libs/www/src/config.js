import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Logo, Badge } from '@cwds/components'
import getRepoStatus from './macros/repo-status.macro'
const status = getRepoStatus()

//
// Configure Components
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
