import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import styles from './PageHeader.module.scss';

const propTypes = {};

const defaultProps = {};

const PageHeader = props => {
  return (
    <div className={cn(styles.PageHeader)}>
      <Container>
        <Row>
          <Col>HELLO WORLD</Col>
        </Row>
      </Container>
    </div>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
