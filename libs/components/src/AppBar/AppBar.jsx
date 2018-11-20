import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import styles from './AppBar.module.scss'
import Logo from '../Logo'
import {
  Button,
  Popover,
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
} from '@cwds/reactstrap'
import Avatar from '../Avatar'
import CaresContext from '../utils/Cares'

const defaultActionsRenderer = () => {}

class AppBar extends PureComponent {
  render() {
    const { actions, ...props } = this.props
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
