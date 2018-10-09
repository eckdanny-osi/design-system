import React, { Fragment } from 'react';
import cn from 'classnames';
import Styles from './DataGrid.module.scss';
import Icon from '../Icon';

const NoDataText = () => (
  <div className={cn(Styles.Overlay, 'text-danger')}>
    <Icon icon="error" size="2x" className={cn(Styles.Icon, 'mr-2')} />
    No Records Found!
  </div>
);

export default NoDataText;
