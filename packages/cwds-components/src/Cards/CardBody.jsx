import React, { Component } from 'react';
import CardBodyUnstyled from 'reactstrap/lib/CardBody';
import styles from './Cards.module.scss';

export { CardBodyUnstyled };

export class CardBody extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardBodyUnstyled cssModule={styles} {...props} />;
  }
}

export default CardBody;
