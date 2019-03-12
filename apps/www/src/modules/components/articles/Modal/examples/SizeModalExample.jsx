import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader, Button } from '@cwds/reactstrap'

export default class SizeModalExample extends Component {
  state = {
    ModalOpen: false,
  }
  toggle = () => {
    this.setState(prevState => ({
      ModalOpen: !prevState.ModalOpen,
    }))
  }
  render() {
    const { size, label, className } = this.props
    return (
      <div className={className}>
        <Button color="primary" onClick={this.toggle}>
          Open {label}
        </Button>
        <Modal size={size} isOpen={this.state.ModalOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>Hi, I am a {size} Modal!</ModalBody>
        </Modal>
        {!size && <span className="pl-2">(default)</span>}
      </div>
    )
  }
}
