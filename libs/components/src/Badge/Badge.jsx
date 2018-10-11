import React from 'react';
import BadgeUnstyled from 'reactstrap/lib/Badge';
import getDisplayName from 'react-display-name';
import Styles from './Badge.module.scss';

const Badge = props => <BadgeUnstyled {...props} />;
Badge.displayName = `cares(${getDisplayName(BadgeUnstyled)})`;
Badge.propTypes = { ...BadgeUnstyled.propTypes };
Badge.defaultProps = { ...BadgeUnstyled.defaultProps, cssModule: Styles };

export default Badge;
