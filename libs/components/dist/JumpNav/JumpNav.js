function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Nav from '../Nav';
import Styles from "./JumpNav.module.css";

const naiveSolnJs = e => {
  e.preventDefault();
  const el = e.target.getAttribute('href').slice(1);
  const $el = document.getElementById(el);
  const rect = $el.getBoundingClientRect();
  const anchorOffset = window.pageYOffset + rect.top - (136 + 8.5 + 7);
  window.scrollTo(window.pageXOffset, anchorOffset); // @todo(dce): fix lame scroll thing
  // $el.scrollIntoView();
  // 136 + 8.5
};

const DefaulItemTag = (_ref) => {
  let {
    path,
    title,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["path", "title", "children"]);

  return React.createElement(Nav.Item, props, React.createElement(Nav.Link, {
    href: path // onClick={naiveSolnJs}

  }, title));
};

const propTypes = {
  routes: PropTypes.array,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func])
};
const defaultProps = {
  routes: [],
  itemTag: DefaulItemTag
};

const JumpNav = ({
  routes,
  itemTag: ItemTag
}) => React.createElement(Nav, {
  vertical: true,
  className: cn(Styles['JumpNav'])
}, routes.map(({
  path,
  title,
  children
}) => React.createElement(ItemTag, {
  key: path,
  path: path,
  title: title,
  children: children
})));

JumpNav.propTypes = propTypes;
JumpNav.defaultProps = defaultProps;
export default JumpNav;