import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './AppBar.module.scss';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';

const propTypes = {};

const defaultProps = {};

const AppBar = props => {
  return (
    <div className={cn(styles.AppBar)}>
      <Container>
        <Row>
          <Col>AppBar</Col>
        </Row>
      </Container>
    </div>
  );
};

AppBar.propTypes = propTypes;
AppBar.defaultProps = defaultProps;

export default AppBar;
