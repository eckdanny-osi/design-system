import React from 'react';
import { Tooltip as TooltipUnstyled } from 'reactstrap';
import Styles from './Tooltip.module.scss';

const Tooltip = props => <TooltipUnstyled {...props} />;
Tooltip.propTypes = { ...TooltipUnstyled.propTypes };
Tooltip.defaultProps = { ...TooltipUnstyled.defaultProps, cssModule: Styles };

export default Tooltip;
