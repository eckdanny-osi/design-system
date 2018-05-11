// export { default } from './Button';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BadgeUnstyled from 'reactstrap/lib/Badge';
import styles from './Badge.module.scss';

const foo = {
  foo: PropTypes.arrayOf(),
};

export { BadgeUnstyled };

export class Badge extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <BadgeUnstyled cssModule={styles} {...props} />;
  }
}

export default Badge;
