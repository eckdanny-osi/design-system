import React, { Fragment } from 'react';
import cn from 'classnames';
import Styles from "./DataGrid.module.css";
import Icon from '../Icon';

const NoDataText = () => React.createElement("div", {
  className: cn(Styles.Overlay, 'text-danger')
}, React.createElement(Icon, {
  icon: "error",
  size: "2x",
  className: cn(Styles.Icon, 'mr-2')
}), "No Records Found!");

export default NoDataText;