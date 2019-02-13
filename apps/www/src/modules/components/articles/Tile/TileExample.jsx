import React, { Fragment } from 'react'
import {
  Tile,
  UncontrolledMenu as Menu,
  MenuItem,
  Icon,
} from '@cwds/components'

const MyMenu = (
  <Menu right>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Schedule Meeting</MenuItem>
    <MenuItem>Report Issue</MenuItem>
  </Menu>
)

const MyMenuItemsFragment = (
  <Fragment>
    <MenuItem>Profile</MenuItem>
    <MenuItem>Schedule Meeting</MenuItem>
    <MenuItem>Report Issue</MenuItem>
  </Fragment>
)

const MyMenuItemsArray = [
  <MenuItem key="profile">Profile</MenuItem>,
  <MenuItem key="meeting">Schedule Meeting</MenuItem>,
  <MenuItem key="issue">Report Issue</MenuItem>,
]

const TileExample = () => (
  <Tile
    title="The Tile Title which could potentially be really really long"
    foo="foo"
    bar="bar"
    quo="quo"
    // Menu={MyMenu}
    MenuItems={MyMenuItemsFragment}
    // MenuItems={MyMenuItemsArray}
    Icon={<Icon name="check" />}
    className="mb-0"
  >
    Just some content... I am just a container so pretty much anything can be
    put in me
  </Tile>
)

export default TileExample
