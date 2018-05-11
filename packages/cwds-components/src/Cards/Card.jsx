import React, { Component } from 'react';
import CardUnstyled from 'reactstrap/lib/Card';
import styles from './Cards.module.scss';

export { CardUnstyled };

export class Card extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardUnstyled cssModule={styles} {...props} />;
  }
}

export default Card;
