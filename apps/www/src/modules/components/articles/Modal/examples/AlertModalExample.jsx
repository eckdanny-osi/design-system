import React, { Component } from 'react'
import { Alert, Modal, ModalBody, ModalHeader, Button } from '@cwds/components'

export default class AlertModalExample extends Component {
  state = {
    ModalOpen: false,
  }
  toggle = () => {
    this.setState(prevState => ({
      ModalOpen: !prevState.ModalOpen,
    }))
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Click me to open modal
        </Button>
        <Modal isOpen={this.state.ModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <Alert bodyClassName="border-0" color="success" className="m-0">
              Success! Is this how you want to begin the modal?
            </Alert>
          </ModalHeader>
          <ModalBody>Hi, I am an Alert modal!</ModalBody>
        </Modal>
      </div>
    )
  }
}
