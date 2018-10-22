import React from 'react';
import { Icon } from '@cwds/components';
import cn from 'classnames';
import Styles from './IconSquare.module.scss';

const IconSquare = props => {
  return (
    <div className={cn('p-2', 'm-1', Styles.IconSquare)}>
      <div>
        <Icon size="2x" {...props} />
      </div>
      <small className={cn('mt-1', Styles.name)}>
        <tt>{props.icon}</tt>
      </small>
    </div>
  );
};

export default IconSquare;
