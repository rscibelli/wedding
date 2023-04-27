import React, { useState } from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SongRequest() {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    return (
      <div>

        <Button variant="primary" onClick={toggleShow}>
          Request a song!
        </Button>

        <Modal show={show} onHide={toggleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Song Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>Everything you need to request a song should be here soon!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleShow}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
}