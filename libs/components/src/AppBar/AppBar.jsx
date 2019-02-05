import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import UserMenu from '../UserMenu'
import Brand from '../Brand'
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
      <Col className="d-flex justify-content-start">
        <Brand {...getBrandProps(restProps)} />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <UserMenu {...getUserMenuProps(restProps)} />
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.func.isRequired,
  UserMenu: PropTypes.func.isRequired,
  getBrandProps: PropTypes.func.isRequired,
  getUserMenuProps: PropTypes.func.isRequired,
}

AppBar.defaultProps = {
  Brand,
  UserMenu,
  getBrandProps: () => ({}),
  getUserMenuProps: () => ({}),
}

AppBar.contextType = CaresContext

export { AppBar as AppBarNoContext }

export default withCaresConfig(AppBar, ['Brand', 'UserMenu'])
