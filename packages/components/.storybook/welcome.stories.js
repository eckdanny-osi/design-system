import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs';

storiesOf('Welcome', module)
  .addDecorator(withKnobs)

  /**
   *
   */
  .add('Hello', withInfo()(() => <div>Hello World!</div>));
