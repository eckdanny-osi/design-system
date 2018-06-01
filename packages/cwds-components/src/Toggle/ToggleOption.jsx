import React, { PureComponent } from 'react';
import { ButtonUnstyled as Button } from '../Button';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Styles from './Toggle.module.scss';

const propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

const Option = props => {
  const { onClick, ...attrs } = props;
  return (
    <Button
      className={cn(Styles.Option, {
        [Styles.ActiveOption]: props.active,
      })}
      onClick={e => onClick(props.value)}
      {...attrs}
    />
  );
};

Option.propTypes = propTypes;

export default Option;
