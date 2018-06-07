import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BadgeUnstyled from 'reactstrap/lib/Badge';
import Styles from './Badge.module.scss';

export { BadgeUnstyled };

export class Badge extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <BadgeUnstyled cssModule={Styles} {...props} />;
  }
}

export default Badge;
