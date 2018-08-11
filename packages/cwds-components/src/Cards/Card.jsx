import React, { Component } from 'react';
import CardUnstyled from 'reactstrap/lib/Card';
import { withCssModule } from '../utils';
import Styles from './Cards.module.scss';

// Card with no Card.* immediate children should assume Card + Card.Body

import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup';
import Subsection from './CardSubsection';
import SubsectionGroup from './CardSubsectionGroup';
import Subtitle from './CardSubtitle';
import Title from './CardTitle';

const MehCard = withCssModule(CardUnstyled, Styles);

/* is using the Card.Body, Card.Header subcomponents */
const hasCardComponentStructure = children => {
  const CardStructureComponents = [Header, Body, Footer];
  return React.Children.toArray(children).every(child =>
    CardStructureComponents.includes(child.type)
  );
};

class Card extends Component {
  static Body = Body;
  static Header = Header;
  static Footer = Footer;
  static Subtitle = Subtitle;
  static Section = Section;
  static Subsection = Subsection;
  static SectionGroup = SectionGroup;
  static SubsectionGroup = SubsectionGroup;
  static Title = Title;

  render() {
    const { children, ...props } = this.props;
    return hasCardComponentStructure(children) ? (
      <MehCard {...props}>{children}</MehCard>
    ) : (
      <MehCard {...props}>
        <Card.Body>{children}</Card.Body>
      </MehCard>
    );
  }
}

export { Card, CardUnstyled };
export default Card;
