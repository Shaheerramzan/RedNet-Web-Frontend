import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { getDonor } from "../../actions";

class EditDonor extends React.Component {
  componentDidMount() {
    this.props.getDonor(this.props.match.params.id);
  }
  configGender = (g) => {
    if (g === "Male") return "M";
    else if (g === "Female") return "F";
    else if (g === "Other") return "O";
    else return "";
  };

  render() {
    const Gender = this.configGender(this.props.donor.gender);
    console.log(Gender);
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
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
                Donors
              </Nav.Link>
              <Nav.Link className="text-white" href="#">
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
        <div className="ui container segment">
          <div>
            <h1 className="text-center ui header">Create Donor</h1>
          </div>
          <form className="ui form">
            <div className="field">
              <h4 className="ui dividing header">Name</h4>
              <div className="two fields">
                <div className="field">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    value={this.props.donor.first_name}
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    value={this.props.donor.last_name}
                  />
                </div>
              </div>
            </div>
            <div className="field">
              <div className="ui dividing header" />
              <div className="two fields">
                <div className="field">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={this.props.donor.phone}
                  />
                </div>
                <div className="field">
                  <label>Gender</label>
                  <select
                    id="gender"
                    className="ui fluid dropdown-header"
                    name="gender"
                    value={Gender}
                  >
                    <option value="">Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                    <option value="O">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="ui button primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { donor: state.donor };
};

export default connect(mapStateToProps, { getDonor })(EditDonor);
