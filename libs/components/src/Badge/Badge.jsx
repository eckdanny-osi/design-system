import React from 'react';
import { Badge as BadgeUnstyled } from 'reactstrap';
import Styles from './Badge.module.scss';

const Badge = props => <BadgeUnstyled {...props} />;
Badge.propTypes = { ...BadgeUnstyled.propTypes };
Badge.defaultProps = { ...BadgeUnstyled.defaultProps, cssModule: Styles };

export default Badge;
