import React, { Component } from 'react';
import CardFooterUnstyled from 'reactstrap/lib/CardFooter';
import styles from './Cards.module.scss';

// TODO:? add an align prop for (text-left, text-center, text-right)

export { CardFooterUnstyled };

export class CardFooter extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardFooterUnstyled cssModule={styles} {...props} />;
  }
}

export default CardFooter;
