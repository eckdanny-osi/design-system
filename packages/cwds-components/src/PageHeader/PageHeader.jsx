import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Icon from '../Icon';
import styles from './PageHeader.module.scss';

const propTypes = {};

const defaultProps = {};

const PageHeader = ({ title = 'Page Header', cta }) => {
  return (
    <div className={cn(styles.PageHeader)}>
      <Container>
        <Row>
          <Col>
            <h1 style={{ marginBottom: 0 }}>{title}</h1>
          </Col>
          <Col xs="3" style={{ textAlign: 'right' }}>
            <Icon icon="plusCircle" size="2x" style={{ marginTop: '6px' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
