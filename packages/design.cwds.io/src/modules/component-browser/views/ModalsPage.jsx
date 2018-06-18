import React from 'react';
import Button from '@cwds/components/lib/Button';
import Modal from '@cwds/components/lib/Modal';
import Card from '@cwds/components/lib/Cards';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <Card>
        <Card.Header>
          <h3>Modals</h3>
        </Card.Header>
        <Card.Body>
          <p>
            Modals are for encapsulating small context-changes for short-lived
            user actions.
          </p>
          <Button color="primary" onClick={this.toggle}>
            Open Modal
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
            <Modal.Body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Modal.Body>
            <Modal.Footer>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>{' '}
              <Button color="primary" onClick={this.toggle}>
                Do Something
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    );
  }
}

export default ModalExample;
