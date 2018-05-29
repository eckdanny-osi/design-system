import React, { Component } from 'react';
import CardUnstyled from 'reactstrap/lib/Card';
import styles from './Cards.module.scss';

import Body from './CardBody';
import Header from './CardHeader';
import Footer from './CardFooter';
import Subtitle from './CardSubtitle';

import Section from './CardSection';
import Subsection from './CardSubsection';
import SectionGroup from './CardSectionGroup';
import SubsectionGroup from './CardSubsectionGroup';

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
Card.Section = Section;
Card.Subsection = Subsection;
Card.SectionGroup = SectionGroup;
Card.SubsectionGroup = SubsectionGroup;

export default Card;
