import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import { Row, Col, Container } from '../Grid';
import Logo from '../Logo';
import { Button } from '../Buttons';
import Popover from '../Popover';
import Avatar from '../Avatar';
import { ListGroup, ListGroupItem } from '../ListGroups';

const defaultActionsRenderer = () => {};

class AppBar extends PureComponent {
  static options = {
    brand: _ => <a>CWDS-CARES</a>,
    actions: defaultActionsRenderer,
  };
  static propTypes = {
    brand: PropTypes.func,
    actions: PropTypes.func,
  };
  static config(opts) {
    AppBar.options = {
      ...AppBar.options,
      ...opts,
    };
  }
  constructor(props) {
    super(props);
    this.renderBrand = this.renderBrand.bind(this);
  }
  renderBrand() {
    const { brand } = this.props;
    return brand ? brand() : AppBar.options.brand();
  }
  renderActions() {
    const { actions, ...props } = this.props;
    return actions ? actions(props) : AppBar.options.actions(props);
  }
  render() {
    const { actions, ...props } = this.props;
    return (
      <Row style={{ alignItems: 'center' }}>
        <Col>{this.renderBrand()}</Col>
        <Col className="text-right">{this.renderActions()}</Col>
      </Row>
    );
  }
}

export default AppBar;
