import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Container, Row, Col } from '../../Grid';
import Styles from "../Layout.module.css";

const Body = ({
  layout,
  sidenav: SideNav = () => null,
  main: Main
}) => {
  return React.createElement("div", {
    role: "main",
    className: cn('pt-3', Styles['Body'])
  }, React.createElement(Container, null, layout === 'dashboard' && React.createElement(Main, null), layout === 'subroutes' && React.createElement(Row, null, React.createElement(Col, {
    role: "navigation",
    sm: 5,
    md: 3
  }, React.createElement(SideNav, null)), React.createElement(Col, {
    role: "main",
    sm: 7,
    md: 9
  }, React.createElement(Main, null))), layout === 'jumpnav' && React.createElement(Row, null, React.createElement(Col, {
    role: "navigation",
    sm: 5,
    md: 3
  }, React.createElement(SideNav, null)), React.createElement(Col, {
    role: "main",
    sm: 7,
    md: 9
  }, React.createElement(Main, null)))));
};

Body.propTypes = {
  layout: PropTypes.oneOf(['dashboard', 'subroutes', 'jumpnav'])
};
Body.defaultProps = {
  layout: 'dashboard'
};
export default Body;