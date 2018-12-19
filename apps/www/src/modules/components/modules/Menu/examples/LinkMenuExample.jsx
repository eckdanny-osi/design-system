import React from 'react'
import { UncontrolledMenu as Menu, MenuItem } from '@cwds/components'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <Menu color="info" label="Links">
      <MenuItem tag={Link} to="/">
        Home
      </MenuItem>
      <MenuItem tag={Link} to="/core-style">
        Core Style
      </MenuItem>
      <MenuItem tag={Link} to="/status">
        Status
      </MenuItem>
      <MenuItem tag="a" href="https://cwds.ca.gov">
        External
      </MenuItem>
    </Menu>
  )
}
