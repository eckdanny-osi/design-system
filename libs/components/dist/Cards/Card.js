function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
const greyOutStyle = {
  backgroundColor: 'whitesmoke',
  textIndent: '-99999px'
};

const LoadingCard = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(CardUnstyled, props, findChildCardStructure(children, Header), React.createElement(Body, null, React.createElement(Card.Body, {
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
  }))));
};

const Card = props => {
  if (props.loading) return React.createElement(LoadingCard, passProps);

  if (!hasCardComponentStructure(props.children)) {
    const {
      children
    } = props,
          passProps = _objectWithoutProperties(props, ["children"]);

    return React.createElement(CardUnstyled, passProps, React.createElement(Body, null, children));
  }

  return React.createElement(CardUnstyled, props);
};

Card.propTypes = _objectSpread({}, CardUnstyled.propTypes, {
  loading: PropTypes.bool
});
Card.defaultProps = _objectSpread({}, CardUnstyled.defaultProps, {
  cssModule: Styles
});
Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;
Card.Subtitle = Subtitle;
Card.Section = Section;
Card.Title = Title;
export default Card;