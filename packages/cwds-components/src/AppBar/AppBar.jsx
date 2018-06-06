import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Logo from '../Logo';

export const AppBarConfig = {
  brand: _ => <Logo />,
};

class AppBar extends PureComponent {
  static propTypes = {
    brand: PropTypes.func,
    rhs: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.renderBrand = this.renderBrand.bind(this);
  }
  renderBrand() {
    if (this.props.brand) {
      return this.props.brand();
    }
    return AppBarConfig.brand();
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
