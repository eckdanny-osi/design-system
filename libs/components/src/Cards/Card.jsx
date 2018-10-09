import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import getDisplayName from 'react-display-name';
import CardUnstyled from 'reactstrap/lib/Card';
import {
  hasCardComponentStructure,
  findChildCardStructure,
} from './card-utils';
import Styles from './Cards.module.scss';
// @todo(dce): this shouldn't depend on DataGrid for anything
import LoadingText from '../DataGrid/LoadingText';

import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup';
import Subtitle from './CardSubtitle';
import Title from './CardTitle';

import { Row, Col } from '../Grid';

const StyledCard = props => <CardUnstyled {...props} />;
StyledCard.propTypes = { ...CardUnstyled.propTypes };
StyledCard.defaultProps = { ...CardUnstyled.defaultProps, cssModule: Styles };
StyledCard.displayName = `cares(${getDisplayName(CardUnstyled)})`;
StyledCard.Body = Body;
StyledCard.Header = Header;
StyledCard.Footer = Footer;
StyledCard.Subtitle = Subtitle;
StyledCard.Section = Section;
StyledCard.Title = Title;

export default StyledCard;

// const Card = hoistNonReactStatics(
//   compose(
//     branch(({ loading }) => !!loading, mkLoadingCard),
//     branch(
//       ({ children }) => !hasCardComponentStructure(children),
//       createWithCardStructure
//     )
//   )(BaseCard),
//   BaseCard
// );

// const Card = ({ loading, children, ...props }) => {
//   if (loading) {
//     return <div>TODO</div>;
//   }
//   if ()

// }

// export { Card, CardUnstyled };
// export default Card;

//
// Helpers
//

function createWithCardStructure(Wrapped) {
  return ({ children, ...props }) => (
    <Wrapped {...props}>
      <Wrapped.Body>{children}</Wrapped.Body>
    </Wrapped>
  );
}

const greyOutStyle = {
  backgroundColor: 'whitesmoke',
  textIndent: '-99999px',
};

function mkLoadingCard(Wrapped) {
  return ({ children, ...props }) => {
    const cardHeader = findChildCardStructure(children, Card.Header);
    return (
      <Card>
        {cardHeader}
        <Card.Body
          style={{
            overflow: 'auto',
            position: 'relative',
          }}
        >
          <Row>
            <Col lg={6}>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
              <p style={greyOutStyle}>placeholder</p>
            </Col>
          </Row>
          <LoadingText
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: '9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </Card.Body>
      </Card>
    );
  };
}
