import React from 'react'
import { UncontrolledMenu as Menu, MenuItem } from '@cwds/components'

export const MenuExample = () => {
  return (
    <Menu label="My Menu" color="primary">
      <MenuItem>Action</MenuItem>
      <MenuItem disabled>Disabled Option</MenuItem>
      <MenuItem>Foo</MenuItem>
      <MenuItem>Bar</MenuItem>
      <MenuItem>Quo</MenuItem>
    </Menu>
  )
}

export const IconMenuExample = () => {
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
