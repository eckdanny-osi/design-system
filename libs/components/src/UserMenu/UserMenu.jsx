import React from 'react'
import { UncontrolledUserMenu, MenuItem } from '../Menu'

const UserMenu = () => {
  return (
    <UncontrolledUserMenu>
      <MenuItem tag="a" href="/logout">
        Logout
      </MenuItem>
    </UncontrolledUserMenu>
  )
}

export default UserMenu
