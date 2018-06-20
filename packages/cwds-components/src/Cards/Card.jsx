import React, { Component } from 'react';
import CardUnstyled from 'reactstrap/lib/Card';
import { withCssModule } from '../utils';
import Styles from './Cards.module.scss';

import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup';
import Subsection from './CardSubsection';
import SubsectionGroup from './CardSubsectionGroup';
import Subtitle from './CardSubtitle';
import Title from './CardTitle';

const Card = withCssModule(CardUnstyled, Styles);

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
Card.Subtitle = Subtitle;
Card.Section = Section;
Card.Subsection = Subsection;
Card.SectionGroup = SectionGroup;
Card.SubsectionGroup = SubsectionGroup;
Card.Title = Title;

export { Card, CardUnstyled };
export default Card;
