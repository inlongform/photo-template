import React, { Component } from "react";
import { Modal, ModalHeader, ModalFooter, Button } from "reactstrap";

class PopOver extends Component {
  render() {
    return (
      <Modal isOpen={this.props.showModal}>
        <ModalHeader>Are you sure you want to remove this image?</ModalHeader>

        <ModalFooter>
          <Button color="link">Yes</Button>
          <Button color="link">No</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default PopOver;
