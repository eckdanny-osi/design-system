import React from 'react';
import IconSquare from './IconSquare';
import { ICON_NAMES } from '@cwds/components';

export default ({ className }) => {
  return (
    <div className={className}>
      {ICON_NAMES.map(name => (
        <IconSquare key={name} name={name} />
      ))}
    </div>
  );
};
