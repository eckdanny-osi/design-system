import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'
import { Row, Col } from '@cwds/reactstrap'
import { UncontrolledUserMenu, MenuItem } from '../Menu'
import { CaresContext, withCaresConfig } from '../utils/CaresContext'

const AppBar = ({ Brand, UserMenu }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-start">
        <Brand />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <UserMenu />
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.func,
  UserMenu: PropTypes.func,
}

AppBar.defaultProps = {
  Brand,
  UserMenu,
}

AppBar.contextType = CaresContext

export default withCaresConfig(AppBar, ['Brand', 'UserMenu'])

//
// Default SubComponents
//

function Brand() {
  return (
    <a href="/">
      <Logo />
    </a>
  )
}

function UserMenu() {
  return (
    <UncontrolledUserMenu>
      <MenuItem tag="a" href="/logout">
        Logout
      </MenuItem>
    </UncontrolledUserMenu>
  )
}
