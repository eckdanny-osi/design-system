import React from 'react'
import { Modal, Button, Icon } from '@cwds/components'

class ModalExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      backdrop: true,
    }

    this.toggle = this.toggle.bind(this)
    this.changeBackdrop = this.changeBackdrop.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    })
  }

  changeBackdrop(e) {
    let value = e.target.value
    if (value !== 'static') {
      value = JSON.parse(value)
    }
    this.setState({ backdrop: value })
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>
          <Icon icon="search" className="mr-2" color="black" />
          Search
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
          backdrop="static"
        >
          <Modal.Header toggle={this.toggle}>
            Search for Components
          </Modal.Header>
          <Modal.Body>
            <p>Yea... wouldn't that be nice?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
