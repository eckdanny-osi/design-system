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
  static propTypes = {
    brand: PropTypes.func,
    actions: PropTypes.func,
  }
  constructor(props) {
    super(props)
    this.renderBrand = this.renderBrand.bind(this)
  }
  renderBrand() {
    const { brand } = this.props
    return brand ? brand() : AppBar.options.brand()
  }
  renderActions() {
    const { actions, ...props } = this.props
    return actions ? actions(props) : AppBar.options.actions(props)
  }
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
