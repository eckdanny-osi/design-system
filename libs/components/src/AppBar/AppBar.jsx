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
} from 'reactstrap'
import Avatar from '../Avatar'

const defaultActionsRenderer = () => {}

class AppBar extends PureComponent {
  static options = {
    brand: _ => <a>CWDS-CARES</a>,
    actions: defaultActionsRenderer,
  }
  static propTypes = {
    brand: PropTypes.func,
    actions: PropTypes.func,
  }
  static config(opts) {
    AppBar.options = {
      ...AppBar.options,
      ...opts,
    }
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
      <div className="row">
        <div className="col">{this.renderBrand()}</div>
        <div className="col" className="text-right">
          {this.renderActions()}
        </div>
      </div>
    )
  }
}

export default AppBar
