import React, { Fragment } from 'react'
import Menu from './Menu'
import Avatar from '../Avatar'

// TODO: Support the [text] and [imgUrl] usage for `Avatar` after it becomes available

const UserMenu = props => {
  return (
    <Menu
      {...props}
      caret
      right
      getDropdownToggleProps={getDropdownToggleProps}
    />
  )
}

UserMenu.propTypes = {}
UserMenu.defaultProps = {
  label: 'Guest',
}

export default UserMenu

//
// Helpers
//

function getDropdownToggleProps(props) {
  return {
    size: 'sm',
    className: 'bg-transparent border-0 text-white',
    children: (
      <Fragment>
        <span className="mr-2 text-capitalize">{props.label}</span>
        <Avatar invert size="sm" />
      </Fragment>
    ),
  }
}
