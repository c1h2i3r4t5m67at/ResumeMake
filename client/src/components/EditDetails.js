import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { BASE_URL } from "../api/index";

function EditDetails(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    let id = JSON.parse(localStorage.getItem(`resumeId`));
    axios
      .put(BASE_URL + "api/Resume/" + id, { ...props.resume })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're updating your resume!</Modal.Body>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={props.resume.name}
            onChange={(e) => {
              props.setResume({ ...props.resume, name: e.target.value });
            }}
          />
        </InputGroup>

        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Surname</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={props.resume.fullName}
            onChange={(e) => {
              props.setResume({ ...props.resume, fullName: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Job title</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={props.resume.jobTitle}
            onChange={(e) => {
              props.setResume({ ...props.resume, jobTitle: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={props.resume.location}
            onChange={(e) => {
              props.setResume({ ...props.resume, location: e.target.value });
            }}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">
            Mobile number
          </InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={props.resume.phone}
            onChange={(e) => {
              props.setResume({ ...props.resume, phone: e.target.value });
            }}
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditDetails;
