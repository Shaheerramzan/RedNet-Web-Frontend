import React from "react";
import { Form, Col, Row, Button, NavDropdown } from "react-bootstrap";

const CreateDonor = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className="text-center">Create Donor</h1>
        </div>
        <br />
        <div>
          <Form>
            <Form.Group as={Row} controlId="formFirstName">
              <Form.Label column sm="1">
                Firstname
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Firstname" />
              </Col>

              <Form.Label column sm="1">
                Lastname
              </Form.Label>
              <Col sm="5">
                <Form.Control type="text" placeholder="Lastname" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formLastName">
              <Form.Label column sm="1">
                Phone
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Phone" />
              </Col>
            </Form.Group>

            <Form.Group controlId="formGender">
              <Form.Label>
                Gender
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </Form.Label>
              <select typeof="select" className="mdb-select" id="fieldOne">
                <option value="0">Male</option>
                <option value="1">Female</option>
              </select>
            </Form.Group>

            <Form.Group controlId="formBloodGroup">
              <Form.Label>
                Bloodgroup<span>&nbsp;&nbsp;&nbsp;</span>
              </Form.Label>
              <select typeof="select" className="mdb-select" id="fieldOne">
                <option value="0">A+</option>
                <option value="1">A-</option>
                <option value="1">B+</option>
                <option value="1">B-</option>
                <option value="1">O+</option>
                <option value="1">O-</option>
                <option value="1">AB+</option>
                <option value="1">AB-</option>
              </select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </div>
      <br />
      <div>
        <NavDropdown.Divider />
      </div>
    </div>
  );
};
export default CreateDonor;
