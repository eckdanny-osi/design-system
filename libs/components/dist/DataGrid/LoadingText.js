import React, { Fragment } from 'react';
import cn from 'classnames';
import Styles from "./DataGrid.module.css";
import Icon from '../Icon';

const LoadingText = ({
  className,
  style
}) => React.createElement("div", {
  className: cn(Styles.LoadingText),
  style: style || {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-20px'
  }
}, React.createElement(Icon, {
  icon: "circleNotch",
  spin: true,
  size: "2x",
  className: "text-info",
  style: {
    marginRight: '8px'
  }
}), React.createElement("span", null, "Loading..."));

export default LoadingText;