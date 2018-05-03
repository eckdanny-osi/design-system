import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Container from '../Container';
import Row from '../Row';
import Col from '../Col';
import styles from './PageHeader.module.scss';

const propTypes = {};

const defaultProps = {};

const PageHeader = ({ children }) => {
  return (
    <div className={cn(styles.PageHeader)}>
      <Container>{children}</Container>
    </div>
  );
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
