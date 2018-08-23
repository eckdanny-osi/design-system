import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import InfoTip from './';

storiesOf('InfoTips', module)
  .addDecorator(withKnobs)
  .add(
    'InfoTip',
    withInfo()(() => (
      <div>
        <p>
          Need some inline help regarding a partiular item?
          <br />
          Consider using an <tt>InfoTip</tt>.
        </p>
        <p>
          There is an <tt>InfoTip</tt> following this statement
          <InfoTip text="Hello from the InfoTip again!" />
        </p>
      </div>
    ))
  );
