import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Logo from '../Logo';

class AppBar extends PureComponent {
  static options = {
    brand: _ => <a>CWDS-CARES</a>,
  };
  static propTypes = {
    brand: PropTypes.func,
    rhs: PropTypes.func,
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
  render() {
    const { rhs, ...props } = this.props;
    return (
      <div className={cn(styles.AppBar)}>
        <Container>
          <Row style={{ alignItems: 'center' }}>
            <Col>{this.renderBrand()}</Col>
            {rhs && <Col style={{ textAlign: 'right' }}>{rhs(props)}</Col>}
          </Row>
        </Container>
      </div>
    );
  }
}

export default AppBar;
