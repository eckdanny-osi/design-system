import React from 'react';
import AppBar from '../AppBar';
import PageHeader from '../PageHeader';
import { Container } from '../Grid';
export default (({
  appbar,
  header,
  render
}) => {
  return React.createElement("div", null, React.createElement(AppBar, null), React.createElement(PageHeader, null, "Whatever"), render && React.createElement(Container, null, render()));
});