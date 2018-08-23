import React, { Component } from 'react';
import CardDeckUnstyled from 'reactstrap/lib/CardDeck';
import styles from './Cards.module.scss';

export { CardDeckUnstyled };

export class CardDeck extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardDeckUnstyled cssModule={styles} {...props} />;
  }
}

export default CardDeck;
