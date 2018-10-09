import React, { Component } from 'react';
import CardHeaderUnstyled from 'reactstrap/lib/CardHeader';
import styles from './Cards.module.scss';

export { CardHeaderUnstyled };

export class CardHeader extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardHeaderUnstyled cssModule={styles} {...props} />;
  }
}

export default CardHeader;
