function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose, defaultProps, branch, setPropTypes, setDisplayName, setStatic } from 'recompose';
import CardUnstyled from 'reactstrap/lib/Card';
import { withCssModule } from '../utils';
import Styles from "./Cards.module.css";
import LoadingText from '../DataGrid/LoadingText';
import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup'; // import Subsection from './CardSubsection';
// import SubsectionGroup from './CardSubsectionGroup';

import Subtitle from './CardSubtitle';
import Title from './CardTitle';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Row, Col } from '../Grid';
const StyledCard = defaultProps({
  cssModule: Styles
})(CardUnstyled);

class BaseCard extends PureComponent {
  // Attach SubComponents
  // static Subsection = Subsection;
  // static SectionGroup = SectionGroup;
  // static SubsectionGroup = SubsectionGroup;
  render() {
    return React.createElement(StyledCard, this.props);
  }

}

_defineProperty(BaseCard, "Body", Body);

_defineProperty(BaseCard, "Header", Header);

_defineProperty(BaseCard, "Footer", Footer);

_defineProperty(BaseCard, "Subtitle", Subtitle);

_defineProperty(BaseCard, "Section", Section);

_defineProperty(BaseCard, "Title", Title);

const Card = hoistNonReactStatics(compose(setDisplayName('Card'), setPropTypes(CardUnstyled.propTypes), defaultProps(CardUnstyled.defaultProps), branch(({
  loading
}) => !!loading, mkLoadingCard), branch(({
  children
}) => !hasCardComponentStructure(children), createWithCardStructure))(BaseCard), BaseCard);
export { Card, CardUnstyled };
export default Card; //
// Helpers
//

function createWithCardStructure(Wrapped) {
  return (_ref) => {
    let {
      children
    } = _ref,
        props = _objectWithoutProperties(_ref, ["children"]);

    return React.createElement(Wrapped, props, React.createElement(Wrapped.Body, null, children));
  };
}

const greyOutStyle = {
  backgroundColor: 'whitesmoke',
  textIndent: '-99999px'
};

function mkLoadingCard(Wrapped) {
  return (_ref2) => {
    let {
      children
    } = _ref2,
        props = _objectWithoutProperties(_ref2, ["children"]);

    const cardHeader = React.Children.toArray(children).find(child => child.type === Card.Header);
    return React.createElement(Card, null, cardHeader, React.createElement(Card.Body, {
      style: {
        overflow: 'auto',
        position: 'relative' // height: '250px',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingTop: '20px',

      }
    }, React.createElement(Row, null, React.createElement(Col, {
      lg: 6
    }, React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder")), React.createElement(Col, {
      lg: 6,
      className: "d-none d-lg-block"
    }, React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"), React.createElement("p", {
      style: greyOutStyle
    }, "placeholder"))), React.createElement(LoadingText, {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    })));
  };
} // is using the Card.Body, Card.Header subcomponents?


function hasCardComponentStructure(children) {
  const CardStructureComponents = [Header, Body, Footer];
  return React.Children.toArray(children).every(child => CardStructureComponents.includes(child.type));
}