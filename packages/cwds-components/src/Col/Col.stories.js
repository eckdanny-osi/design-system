import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Col from './';

storiesOf('Cols', module)
  .addDecorator(withKnobs)
  .add(
    'Col',
    withInfo()(() => (
      <Col

      />
    ))
  );
