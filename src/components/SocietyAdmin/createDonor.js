import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import { createDonor } from "../../actions";

class CreateDonor extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Navbar className="text-white rounded" bg="dark" expand="lg">
          <div className="font-weight-bold">
            <Navbar.Brand className="text-white" href="#home">
              RED NET
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="text-white" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="/">
                Donors
              </Nav.Link>
              {/*<Nav.Link className="text-white" href="">Create Donor</Nav.Link>*/}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search donor"
                className="mr-sm-4"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div></div>
        <br />
        <br />
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
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { createDonor })(CreateDonor);
