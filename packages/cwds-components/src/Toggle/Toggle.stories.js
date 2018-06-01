import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Toggle from './';

storiesOf('Toggles', module)
  .addDecorator(withKnobs)
  .add(
    'Toggle',
    withInfo()(() => (
      <div style={{ padding: '5px' }}>
        <Toggle onChange={() => alert('hi')}>
          <Toggle.Option value="on">On</Toggle.Option>
          <Toggle.Option active value="off">
            Off
          </Toggle.Option>
          <Toggle.Option value="whatever">Whatever</Toggle.Option>
        </Toggle>
      </div>
    ))
  );
