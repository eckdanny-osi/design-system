import React, { Component } from 'react';
import CardUnstyled from 'reactstrap/lib/Card';
import styles from './Cards.module.scss';

import Body from './CardBody';
import Header from './CardHeader';
import Footer from './CardFooter';
import Subtitle from './CardSubtitle';

export { CardUnstyled };

export class Card extends Component {
  render() {
    const { cssModule, ...props } = this.props;
    return <CardUnstyled cssModule={styles} {...props} />;
  }
}

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
Card.Subtitle = Subtitle;

export default Card;
