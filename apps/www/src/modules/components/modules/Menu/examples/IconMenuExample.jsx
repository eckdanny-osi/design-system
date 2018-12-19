import React from 'react'
import { UncontrolledMenu as Menu, MenuItem } from '@cwds/components'

export default () => {
  return (
    <Menu right>
      <MenuItem>Action</MenuItem>
      <MenuItem disabled>Disabled Option</MenuItem>
      <MenuItem>Foo</MenuItem>
      <MenuItem>Bar</MenuItem>
      <MenuItem>Quo</MenuItem>
    </Menu>
  )
}
