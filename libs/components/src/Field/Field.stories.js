import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import Field from './Field'
import { Card } from '../'

storiesOf('Fields', module)
  .addDecorator(withKnobs)
  .add('basic field', withInfo()(() => <Field label="Hello" />))
  .add('within a Card', () => <WithinCard />)

class WithinCard extends Component {
  state = {
    value: '',
  }
  handleChange = e => {
    action('change')
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <Card>
        <Card.Header>Some Form</Card.Header>
        <Card.Body>
          <form>
            <Field
              label="Some field"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </Card.Body>
        <Card.Footer>alsdkfj</Card.Footer>
      </Card>
    )
  }
}
