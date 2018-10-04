import React from 'react';
import getDisplayName from 'recompose/getDisplayName';
import ButtonUnstyled from 'reactstrap/lib/Button';
import Styles from './Button.module.scss';

const Button = props => <ButtonUnstyled {...props} />;
Button.displayName = `cares(${getDisplayName(ButtonUnstyled)})`;
Button.propTypes = { ...ButtonUnstyled.propTypes };
Button.defaultProps = { ...ButtonUnstyled.defaultProps, cssModule: Styles };

export default Button;
