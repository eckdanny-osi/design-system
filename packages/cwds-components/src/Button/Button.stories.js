import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, selectV2 } from '@storybook/addon-knobs';

import Button from './';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo()(() => {
      const buttonColor = selectV2(
        'color',
        {
          primary: 'primary',
          secondary: 'secondary',
        },
        'primary',
        'MY_BUTTON_COLOR'
      );
      return (
        <Button
          children={text('text', 'Submit')}
          size="sm"
          href={text('href')}
          disabled={boolean('disabled', false)}
          onClick={action('clicked')}
          color={buttonColor}
          outline={boolean('outline', false)}
          block={boolean('block', false)}
          className="btn-outline-warning btn-warning btn-block"
        />
      );
    })
  );
