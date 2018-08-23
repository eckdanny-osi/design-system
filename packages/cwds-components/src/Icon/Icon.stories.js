import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs';

import Icon, { ICON_NAMES } from './';
const sizes = {
  '1x': '1x',
  '2x': '2x',
  '3x': '3x',
  '4x': '4x',
  '5x': '5x',
};

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Icon',
    withInfo()(() => {
      return (
        <Icon
          icon={selectV2('icon', ICON_NAMES, 'check', 'GROUP-ID1')}
          size={selectV2('size', sizes, '1x', 'GROUP-ID2')}
          spin={boolean('spin', false, 'GROUP-ID3')}
        />
      );
    })
  );
