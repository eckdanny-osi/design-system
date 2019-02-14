import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import { renderElementOrComponent } from '../utils'
import { CaresContext } from '../utils/CaresContext'
// For DefaultBrand
import Logo from '../Logo'
// For DefaultUserMenu
import { UncontrolledUserMenu, MenuItem } from '../Menu'

const AppBar = ({ Brand, UserMenu }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-start align-items-center">
        <CaresContext.Consumer>
          {({ Brand: GlobalBrand }) =>
            renderOne(Brand, GlobalBrand, DefaultBrand)
          }
        </CaresContext.Consumer>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <CaresContext.Consumer>
          {({ UserMenu: GlobalUserMenu }) =>
            renderOne(UserMenu, GlobalUserMenu, DefaultUserMenu)
          }
        </CaresContext.Consumer>
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  UserMenu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}
AppBar.defaultProps = {}

export default AppBar

//
// Defaults
//

function DefaultBrand() {
  return (
    <a href="/">
      <Logo />
    </a>
  )
}

function DefaultUserMenu() {
  return (
    <UncontrolledUserMenu>
      <MenuItem onClick={() => alert('logout!')}>Logout</MenuItem>
    </UncontrolledUserMenu>
  )
}

// Helpers

function renderOne(...renderables) {
  for (const renderable of renderables) {
    if (renderable) return renderElementOrComponent(renderable)
  }
  return null
}
