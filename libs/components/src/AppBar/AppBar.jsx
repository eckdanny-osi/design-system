import React, { PureComponent } from 'react'
import { Row, Col } from '@cwds/reactstrap'
import CaresContext from '../utils/CaresContext'

class AppBar extends PureComponent {
  render() {
    return (
      <Row>
        <Col className="d-flex justify-content-start">
          <CaresContext.Consumer>
            {({ appBarBrand }) => appBarBrand(this.props)}
          </CaresContext.Consumer>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <CaresContext.Consumer>
            {({ appBarUserMenu }) => appBarUserMenu(this.props)}
          </CaresContext.Consumer>
        </Col>
      </Row>
    )
  }
}

export default AppBar
