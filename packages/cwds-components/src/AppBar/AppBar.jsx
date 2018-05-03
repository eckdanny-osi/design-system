import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Logo from '../Logo';

const propTypes = {
  rhs: PropTypes.func,
};

const defaultProps = {};

const AppBar = ({ rhs, brand, ...props }) => {
  return (
    <div className={cn(styles.AppBar)}>
      <Container>
        <Row style={{ alignItems: 'center' }}>
          <Col>{brand && brand()}</Col>
          {rhs && <Col style={{ textAlign: 'right' }}>{rhs(props)}</Col>}
        </Row>
      </Container>
    </div>
  );
};

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
