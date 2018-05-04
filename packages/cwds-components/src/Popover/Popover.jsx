import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Popover from 'reactstrap/lib/Popover';
import { withCssModule } from '../utils';
// import './Popover.module.scss';
import styles from './Popover.module.scss';

// import '../../../../node_modules/bootstrap/scss/bootstrap.scss';
// @import '~bootstrap/scss/popover';

// export default Popover;

function withInnerClassName(WrappedComponent) {
  class WithInnerClassName extends Component {
    render() {
      return (
        <WrappedComponent {...this.props} innerClassName={styles.popover} />
      );
    }
  }
  return WithInnerClassName;
}

export default withInnerClassName(withCssModule(Popover, styles));
