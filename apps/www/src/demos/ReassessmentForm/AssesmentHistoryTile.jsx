import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {
  CardDeck,
  MenuItem,
  Tile,
  UncontrolledMenu as Menu,
} from '@cwds/components'

const AssesmentHistoryTile = () => (
  <div>
    <CardDeck>
      <Tile
        icon="check"
        title="Complete"
        Menu={
          <Menu right size="sm">
            <MenuItem>Incomplete</MenuItem>
          </Menu>
        }
      >
        <div>
          <Link to="/">08/15/19 CANS</Link>
        </div>
        <div>Completed on 08/15/19</div>
        <div>by Jason Adams</div>
        <div>Case 98234-3486492-843847</div>
        <div>County: San Joaquin</div>
      </Tile>
      <Tile
        icon="check"
        title="Complete"
        Menu={
          <Menu right size="sm">
            <MenuItem>Incomplete</MenuItem>
          </Menu>
        }
      >
        <div>
          <Link to="/">02/15/19 CANS</Link>
        </div>
        <div>Completed on 02/15/19</div>
        <div>by Jason Adams</div>
        <div>Case 98234-3486492-843847</div>
        <div>County: San Joaquin</div>
      </Tile>
      <Tile
        icon="trash-alt"
        title="Deleted"
        MenuItems={
          <Fragment>
            <MenuItem>Approve</MenuItem>
            <MenuItem>Edit Workflow</MenuItem>
            <MenuItem>Vacation</MenuItem>
          </Fragment>
        }
      >
        <div>08/15/19 CANS</div>
        <div>Completed on 08/15/19</div>
        <div>by Jason Adams</div>
        <div>Case 98234-3486492-843847</div>
        <div>County: San Joaquin</div>
      </Tile>
    </CardDeck>
  </div>
)

export default AssesmentHistoryTile
