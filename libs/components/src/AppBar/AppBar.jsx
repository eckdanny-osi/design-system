import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import UserMenu from '../UserMenu'
import Brand from '../Brand'
import { renderElementOrComponent } from '../utils'
import { CaresContext, withCaresConfig } from '../utils/CaresContext'

const AppBar = ({
  Brand,
  UserMenu,
  getBrandProps,
  getUserMenuProps,
  ...restProps
}) => {
  return (
    <Row>
      <Col className="d-flex justify-content-start align-items-center">
        {renderElementOrComponent(Brand, restProps, getBrandProps)}
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        {renderElementOrComponent(UserMenu, restProps, getUserMenuProps)}
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  UserMenu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  getBrandProps: PropTypes.func.isRequired,
  getUserMenuProps: PropTypes.func.isRequired,
}

AppBar.defaultProps = {
  // UserMenu,
  getBrandProps: () => ({}),
  getUserMenuProps: () => ({}),
  Brand,
}

AppBar.contextType = CaresContext

export { AppBar as AppBarNoContext }

export default withCaresConfig(AppBar, ['Brand', 'UserMenu'])
