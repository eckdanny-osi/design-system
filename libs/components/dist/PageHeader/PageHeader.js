function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Row, Col } from '../Grid';
import Icon from '../Icon';
import styles from "./PageHeader.module.css";

class PageHeader extends PureComponent {
  render() {
    const {
      title,
      cta
    } = this.props;
    return React.createElement("div", {
      className: cn(styles.PageHeader, 'd-flex', 'align-items-center')
    }, React.createElement("div", {
      className: cn('flex-grow-1')
    }, React.createElement("h1", {
      className: cn(styles.PageTitle, 'm-0')
    }, 'function' === typeof title ? title() : title)), cta && React.createElement("div", {
      className: cn('pr-2')
    }, cta()));
  }

}

_defineProperty(PageHeader, "propTypes", {
  title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  cta: PropTypes.func
});

_defineProperty(PageHeader, "defaultProps", {
  title: ''
});

export default PageHeader;