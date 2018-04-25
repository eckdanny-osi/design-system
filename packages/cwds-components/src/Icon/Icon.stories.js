import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Icon from './';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .add(
    'Icon',
    withInfo()(() => (
      <Icon

      />
    ))
  );
