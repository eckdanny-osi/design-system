import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from '@cwds/components'

const Sidenav = ({ routes }) => {
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

export default Sidenav
