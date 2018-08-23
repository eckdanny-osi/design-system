import React, { Component } from 'react';
import TooltipUnstyled from 'reactstrap/lib/Tooltip';
import Styles from './Tooltip.module.scss';
import { withCssModule } from '../utils';

const Tooltip = withCssModule(TooltipUnstyled, Styles);

export { Tooltip, TooltipUnstyled };

export default Tooltip;
