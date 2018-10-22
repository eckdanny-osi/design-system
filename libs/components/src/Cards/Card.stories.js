import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import Card from './'

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add(
    'Basic Card',
    withInfo()(() => <Card>Cards are just white boxes really...</Card>)
  )
  .add(
    'Card Structure',
    withInfo()(() => (
      <div>
        <Card>
          <Card.Header>Header</Card.Header>
          <Card.Body>Body</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      </div>
    ))
  )
  .add('MultiContext Card', () => (
    <div>
      <h3>TODO</h3>
    </div>
  ))
