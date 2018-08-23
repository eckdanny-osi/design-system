import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Grid from './';

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .add(
    'Grid Components',
    withInfo()(() => (
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>Foo</Grid.Col>
          <Grid.Col>Bar</Grid.Col>
          <Grid.Col>Quo</Grid.Col>
          <Grid.Col>Qux</Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sm={8} className="text-danger">
            9
          </Grid.Col>
          <Grid.Col sm={4} style={{ backgroundColor: 'red' }}>
            3
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    ))
  );
