import React from 'react'
import { Row, Col } from '@cwds/reactstrap'
import CaresContext from '../utils/CaresContext'

const AppBar = props => (
  <Row>
    <Col className="d-flex justify-content-start">
      <CaresContext.Consumer>
        {({ appBarBrand }) => appBarBrand(props)}
      </CaresContext.Consumer>
    </Col>
    <Col className="d-flex justify-content-end align-items-center">
      <CaresContext.Consumer>
        {({ appBarUserMenu }) => appBarUserMenu(props)}
      </CaresContext.Consumer>
    </Col>
  </Row>
)

export default AppBar
