function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import AppBar from '../AppBar';
import PageHeader from '../PageHeader';
import { Container, Col, Row } from '../Grid';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
export default ((_ref) => {
  let {
    appbar,
    appBar,
    header,
    sidebar,
    render
  } = _ref,
      props = _objectWithoutProperties(_ref, ["appbar", "appBar", "header", "sidebar", "render"]);

  return React.createElement("div", null, React.createElement("header", null, appBar ? appBar(props) : React.createElement(AppBar, null), header ? header(props) : React.createElement(PageHeader, null)), React.createElement("main", null, React.createElement(Container, null, React.createElement(Row, null, React.createElement(Col, {
    md: "4",
    lg: "3"
  }, sidebar(props)), React.createElement(Col, {
    md: "8",
    lg: "9"
  }, render(props))))));
});