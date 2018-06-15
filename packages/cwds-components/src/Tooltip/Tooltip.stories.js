import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';

import Tooltip from './';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <div>
        <p>alskdfjasdf</p>
        <p>alskdfjasdf</p>
        <p>alskdfjasdf</p>
        <p>alskdfjasdf</p>
        <p>alskdfjasdf</p>
        <p>alskdfjasdf</p>
        <p>
          Somewhere in here is a{' '}
          <a href="#" id="TooltipExample">
            tooltip
          </a>.
        </p>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
          style={{
            textAlign: 'left',
          }}
        >
          Hello world!
        </Tooltip>
      </div>
    );
  }
}

storiesOf('Tooltips', module)
  .addDecorator(withKnobs)
  .add('Tooltip', withInfo()(() => <Example />));
