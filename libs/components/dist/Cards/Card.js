function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import getDisplayName from 'react-display-name';
import CardUnstyled from 'reactstrap/lib/Card';
import { hasCardComponentStructure, findChildCardStructure } from './card-utils';
import Styles from "./Cards.module.css"; // @todo(dce): this shouldn't depend on DataGrid for anything

import LoadingText from '../DataGrid/LoadingText';
import Body from './CardBody';
import Footer from './CardFooter';
import Header from './CardHeader';
import Section from './CardSection';
import SectionGroup from './CardSectionGroup';
import Subtitle from './CardSubtitle';
import Title from './CardTitle';
import { Row, Col } from '../Grid';

const StyledCard = props => React.createElement(CardUnstyled, props);

StyledCard.propTypes = _objectSpread({}, CardUnstyled.propTypes);
StyledCard.defaultProps = _objectSpread({}, CardUnstyled.defaultProps, {
  cssModule: Styles
});
StyledCard.displayName = `cares(${getDisplayName(CardUnstyled)})`;
StyledCard.Body = Body;
StyledCard.Header = Header;
StyledCard.Footer = Footer;
StyledCard.Subtitle = Subtitle;
StyledCard.Section = Section;
StyledCard.Title = Title;
export default StyledCard; // const Card = hoistNonReactStatics(
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

    const cardHeader = findChildCardStructure(children, Card.Header);
    return React.createElement(Card, null, cardHeader, React.createElement(Card.Body, {
      style: {
        overflow: 'auto',
        position: 'relative'
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
}