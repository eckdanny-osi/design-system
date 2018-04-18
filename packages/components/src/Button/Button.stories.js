import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Button from './';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo()(() => (
      <Button
        children={text('text', 'Hello')}
        primary={boolean('primary', false)}
        disabled={boolean('disabled', false)}
        onClick={action('clicked')}
        outline={boolean('outline', false)}
        block={boolean('block', false)}
        onClick={action('button-click')}
      />
    ))
  );
