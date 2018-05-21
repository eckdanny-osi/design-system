import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import Icon from '../Icon';
import styles from './PageHeader.module.scss';

const propTypes = {
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

const defaultProps = {};

const PageHeader = ({ title = 'Page Header', cta }) => {
  return (
    <div className={cn(styles.PageHeader)}>
      <Container>
        <Row>
          <Col>
            <h1 className={cn(styles.PageTitle)}>
              {'function' === typeof title ? title() : title}
            </h1>
          </Col>
          {cta && (
            <Col xs="3" className={cn(styles.ActionsContainer)}>
              {cta()}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
