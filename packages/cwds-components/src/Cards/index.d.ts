import * as React from 'react';
import { CardProps } from 'reactstrap';

declare class CardBody extends React.Component {}
declare class CardHeader extends React.Component {}
declare class CardFooter extends React.Component {}
declare class CardSubtitle extends React.Component {}
declare class CardSection extends React.Component {}
declare class CardSubsection extends React.Component {}
declare class CardSectionGroup extends React.Component {}
declare class CardSubsectionGroup extends React.Component {}
declare class CardTitle extends React.Component {}

declare class Card extends React.Component<
  Pick<CardProps, Exclude<keyof CardProps, 'cssModule'>>
> {}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.Subtitle = CardSubtitle;
Card.Section = CardSection;
Card.Subsection = CardSubsection;
Card.SectionGroup = CardSectionGroup;
Card.SubsectionGroup = CardSubsectionGroup;
Card.Title = CardTitle;

export default Card;
