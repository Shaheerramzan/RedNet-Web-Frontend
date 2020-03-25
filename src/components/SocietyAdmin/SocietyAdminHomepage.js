import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getDonors } from "../../actions";
import {
  Button,
  Form,
  FormControl,
  Jumbotron,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

class SocietyAdminHomepage extends React.Component {
  componentDidMount() {
    this.props.getDonors();
  }

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
              <Nav.Link className="text-white" href="/create">
                Create Donor
              </Nav.Link>
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
        <br />
        <br />
        <div className="container">
          <div>
            <h1 className="text-center">Listing all Donors</h1>
          </div>
          <br />
          {this.props.donors.map((donor) => (
            <div key={donor.id}>
              <Jumbotron>
                <p>Name: {donor.first_name}</p>
                <p>Phone-No: {donor.phone}</p>
                <p>Gender: {donor.gender}</p>
                <p>Blood Group: {donor.blood_group}</p>
                <div className="buttons">
                  <Link className="primary ui button" to={`${donor.id}/edit`}>
                    Edit
                  </Link>
                  <Button className="negative ui button">Delete</Button>
                </div>
              </Jumbotron>
            </div>
          ))}
        </div>
        <br />
        <div>
          <NavDropdown.Divider />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { donors: state.donors };
};

export default connect(mapStateToProps, { getDonors })(SocietyAdminHomepage);
