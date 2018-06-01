import React, { PureComponent } from 'react';
import { ButtonUnstyled as Button } from '../Button';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Styles from './Toggle.module.scss';

const propTypes = {
  onClick: PropTypes.func,
};

const Option = props => {
  return (
    <Button
      className={cn(Styles.Option, {
        [Styles.ActiveOption]: props.active,
      })}
      onClick={e => props.onClick(props.value)}
    >
      {props.children}
    </Button>
  );
};

Option.propTypes = propTypes;

export default Option;
