import React from 'react'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from '@cwds/reactstrap'

export default class Example extends React.Component {
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
        <Modal
          className="warning-modal"
          isOpen={this.state.ModalOpen}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody className="warning-modal-body">
            <div className="warning-modal-exclamation-triangle">
              <i className="fa fa-exclamation-triangle" />
              Hi, I am Modal. You can dismiss me through multiple ways. Use
              blur/click out or or click `x`
            </div>
          </ModalBody>
          <ModalFooter className="warning-modal-footer" />
        </Modal>
      </div>
    )
  }
}
