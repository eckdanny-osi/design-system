import React, { Component } from 'react';
import Tooltip from '@cwds/components/lib/Tooltip';

class TooltipExample extends Component {
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
      <section>
        <h3>Tooltip</h3>
        <p>
          Somewhere in here is a <a id="TooltipExample">tooltip</a>.
        </p>
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          Hello world!
        </Tooltip>
      </section>
    );
  }
}

export default TooltipExample;
