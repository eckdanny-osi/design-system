import React from 'react';

import { Button } from '../Buttons';
import Popover from './';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

storiesOf('Popovers', module)
  .addDecorator(withKnobs)
  .add('Popover', withInfo()(() => <Example />));

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <Popover.Header>Popover Title</Popover.Header>
          <Popover.Body>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
            <h3>alskdjfadsf</h3>
            <ul>
              <li>alskdfj</li>
            </ul>
          </Popover.Body>
        </Popover>
      </div>
    );
  }
}
