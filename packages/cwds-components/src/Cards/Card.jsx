import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  compose,
  defaultProps,
  branch,
  setPropTypes,
  setDisplayName,
  setStatic,
} from 'recompose';
import CardUnstyled from 'reactstrap/lib/Card';
import { withCssModule } from '../utils';
import Styles from './Cards.module.scss';
import LoadingText from '../DataGrid/LoadingText';

import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup';
import Subsection from './CardSubsection';
import SubsectionGroup from './CardSubsectionGroup';
import Subtitle from './CardSubtitle';
import Title from './CardTitle';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { Row, Col } from '../Grid';

const StyledCard = defaultProps({ cssModule: Styles })(CardUnstyled);

class BaseCard extends PureComponent {
  // Attach SubComponents
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
    return <StyledCard {...this.props} />;
  }
}

const Card = hoistNonReactStatics(
  compose(
    setDisplayName('Card'),
    setPropTypes(CardUnstyled.propTypes),
    defaultProps(CardUnstyled.defaultProps),
    branch(({ loading }) => !!loading, mkLoadingCard),
    branch(
      ({ children }) => !hasCardComponentStructure(children),
      createWithCardStructure
    )
  )(BaseCard),
  BaseCard
);

export { Card, CardUnstyled };
export default Card;

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
    const cardHeader = React.Children.toArray(children).find(
      child => child.type === Card.Header
    );
    return (
      <Card>
        {cardHeader}
        <Card.Body
          style={{
            overflow: 'auto',
            position: 'relative',
            // height: '250px',
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            // paddingTop: '20px',
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

// is using the Card.Body, Card.Header subcomponents?
function hasCardComponentStructure(children) {
  const CardStructureComponents = [Header, Body, Footer];
  return React.Children.toArray(children).every(child =>
    CardStructureComponents.includes(child.type)
  );
}
