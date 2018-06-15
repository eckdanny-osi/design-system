import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { TooltipUncontrolled } from '../Tooltip';
import { default as Icon } from '../Icon';
import styles from './InfoTip.module.scss';

export const InfoTip = () => {
  return (
    <div>
      <p>
        There is an <tt>InfoTip</tt> below...
      </p>
      <p>
        There is an <tt>InfoTip</tt> below...
      </p>
      <div>
        <p>
          laksdfjlaksdfj alsdkjf laskjf dlaksdj falksdf j
          <Icon
            icon="infoCircle"
            color="primary"
            size="xs"
            id="UncontrolledTooltipExample"
          />
        </p>
        <TooltipUncontrolled
          placement="top"
          target="UncontrolledTooltipExample"
        >
          Hello world!
        </TooltipUncontrolled>
      </div>
    </div>
  );
};

export default InfoTip;
