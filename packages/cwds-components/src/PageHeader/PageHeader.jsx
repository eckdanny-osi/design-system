import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './PageHeader.module.scss'

const propTypes = {

};

const defaultProps = {

};

const PageHeader = props => {
  return (
    <div className={cn(styles.PageHeader)}>Hello World</div>
  );
}

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;

export default PageHeader;
