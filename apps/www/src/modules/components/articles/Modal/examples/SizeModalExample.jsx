import React, { Fragment } from 'react'
import { Alert } from '@cwds/components'
import { Modal, ModalBody, ModalHeader, Button } from '@cwds/reactstrap'

export class ModalMoreExample extends React.Component {
  state = {
    ModalOpen: false,
    ModalOpen1: false,
    ModalOpen2: false,
  }
  toggle = key => _ => this.setState(prevState => ({ [key]: !prevState[key] }))
  modalView() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle('ModalOpen')}>
          Click Me
        </Button>
        <Modal
          className="warning-modal"
          centered={true}
          size="lg"
          isOpen={this.state.ModalOpen}
          toggle={this.toggle('ModalOpen')}
        >
          <ModalHeader tag="h2" toggle={this.toggle('ModalOpen')}>
            How would you like to begin?
          </ModalHeader>
          <ModalBody className="warning-modal-body">
            <div className="warning-modal-exclamation-triangle">
              <i className="fa fa-exclamation-triangle" />
              Would you prefer to start with recently completed ratings?
            </div>
            <div className="p-3 text-right">
              <Button className="mx-3" onClick={this.toggle('ModalOpen')}>
                Button
              </Button>{' '}
              <Button className="mx-3" color="primary">
                Button
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </Fragment>
    )
  }
  modalView1() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle('ModalOpen1')}>
          Variation
        </Button>
        <Modal
          className="warning-modal"
          centered={true}
          size="lg"
          isOpen={this.state.ModalOpen1}
          toggle={this.toggle('ModalOpen1')}
        >
          <ModalHeader tag="h2" toggle={this.toggle('ModalOpen1')}>
            How would you like to begin this variation?
          </ModalHeader>
          <ModalBody className="warning-modal-body">
            <div className="warning-modal-exclamation-triangle">
              <i className="fa fa-exclamation-triangle" />
              Would you prefer to start with or without the most recently
              completed ratings?
            </div>
            <div className="p-3 text-right">
              <Button className="mx-3" onClick={this.toggle('ModalOpen1')}>
                Button
              </Button>
              <Button className="mx-3" onClick={this.toggle('ModalOpen1')}>
                Button
              </Button>
              <Button className="mx-3" color="primary">
                Button
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </Fragment>
    )
  }
  modalView2() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle('ModalOpen2')}>
          And Another one
        </Button>
        <Modal
          className="warning-modal"
          centered={true}
          size="lg"
          isOpen={this.state.ModalOpen2}
          toggle={this.toggle('ModalOpen2')}
        >
          <ModalHeader
            className="d-flex p-0"
            tag="h2"
            toggle={this.toggle('ModalOpen2')}
          >
            <Alert className="border-0 m-0" color="success">
              <strong>Success!</strong> You have completed your training course
            </Alert>
          </ModalHeader>
          <ModalBody className="warning-modal-body">
            <div className="warning-modal-exclamation-triangle">
              <i className="fa fa-exclamation-triangle" />
              Would you like your certificate emailed or texted to you?
            </div>
            <div className="p-3 text-right">
              <Button className="mx-3" onClick={this.toggle('ModalOpen2')}>
                Button
              </Button>
              <Button className="mx-3" color="primary">
                Button
              </Button>
            </div>
          </ModalBody>
        </Modal>
      </Fragment>
    )
  }
  render() {
    return (
      <div className="d-flex justify-content-around">
        {this.modalView()}
        {this.modalView1()}
        {this.modalView2()}
      </div>
    )
  }
}

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
          tag="h2"
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
        </Modal>
      </div>
    )
  }
}
