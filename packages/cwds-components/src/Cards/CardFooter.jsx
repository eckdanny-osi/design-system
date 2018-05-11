import React, { Component } from 'react';
import CardFooterUnstyled from 'reactstrap/lib/CardFooter';
import styles from './Cards.module.scss';

export { CardFooterUnstyled };

export class CardFooter extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardFooterUnstyled cssModule={styles} {...props} />;
  }
}

export default CardFooter;
