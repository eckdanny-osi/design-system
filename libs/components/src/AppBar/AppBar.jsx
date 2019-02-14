import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from '@cwds/reactstrap'
import UserMenu from '../UserMenu'
import Brand from '../Brand'
import { renderElementOrComponent } from '../utils'
import { withCaresConfig } from '../utils/CaresContext'

const AppBar = ({ Brand, UserMenu }) => {
  return (
    <Row>
      <Col className="d-flex justify-content-start align-items-center">
        {renderElementOrComponent(Brand)}
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        {renderElementOrComponent(UserMenu)}
      </Col>
    </Row>
  )
}

AppBar.propTypes = {
  Brand: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  UserMenu: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
}
AppBar.defaultProps = {
  Brand,
  UserMenu,
}

export { AppBar as AppBarNoContext }

export default withCaresConfig(AppBar, ['Brand', 'UserMenu'])
