import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDonor, getDonor, getDonors } from "../../actions";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CSS/ManageDonor.css";
import CreateDonor from "./CreateDonor";

class ManageDonors extends Component {
  constructor(props) {
    super(props);
    this.state = { createDonorClicked: false, donors: {}, renderMe: true };
  }

  componentDidMount() {
    this.props.getDonors();
    this.setState({ renderMe: this.props.renderMe });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.props.donor &&
      this.state.donors[`donor${this.props.donor.donorId}`] === undefined
    ) {
      let v = this.state.donors;
      v[`donor${this.props.donor.donorId}`] = this.props.donor;
      this.setState({
        donors: v,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(
      this.props.donor &&
      this.state.donors[`donor${this.props.donor.donorId}`] === undefined
    );
  }

  deleteDonor = (id) => {
    this.props.deleteDonor(id);
  };

  showDonor = (id) => {
    this.setState({ donorId: id });
    let editText = document.getElementById(`donorShowDetailButton${id}`);
    let donorDetail = document.getElementById(`donorDetailDiv${id}`);

    if (editText.innerText === "show detail") {
      editText.innerText = "hide detail";
      donorDetail.classList.add("show");
      donorDetail.classList.remove("hide");
    } else {
      editText.innerText = "show detail";
      donorDetail.classList.add("hide");
      donorDetail.classList.remove("show");
    }
    if (!this.state.donors[`donor${id}`]) {
      this.props.getDonor(id);
    }
  };

  fillDetailForm = ({
    donorId,
    personId: {
      area,
      bloodGroup,
      city,
      email,
      firstName,
      lastName,
      gender,
      phone1,
      username,
    },
  }) => {
    return (
      <Container id={`donorDetail${donorId}`}>
        <Form>
          <Row>
            <Col className="form-group">
              <label htmlFor="First Name">First Name</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={firstName}
              />
            </Col>
            <Col className="form-group">
              <label htmlFor="Last Name">Last Name</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={lastName}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={username}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group">
              <label htmlFor="E-mail">E-mail</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={email}
              />
            </Col>
            <Col className="form-group">
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={phone1}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group">
              <label htmlFor="City">City</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={city}
              />
            </Col>
            <Col className="form-group">
              <label htmlFor="Area">Area</label>
              <input
                type="text"
                readOnly
                className="form-control"
                value={area}
              />
            </Col>
          </Row>
          <Row>
            <Col className="form-group">
              <label htmlFor="Gender">Gender</label>
              <select className="form-control" disabled={true} value={gender}>
                <option>female</option>
                <option>male</option>
              </select>
            </Col>
            <Col className="form-group">
              <label htmlFor="Blood Group">Blood Group</label>
              <select
                className="form-control"
                disabled={true}
                value={bloodGroup}
              >
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  };

  renderDonorDetail = (id) => {
    if (this.state.donors[`donor${id}`]) {
      return this.fillDetailForm(this.state.donors[`donor${id}`]);
    } else {
      return <Container id={`donorDetail${id}`} />;
    }
  };

  renderDonors = () => {
    if (this.props.donorsList)
      return this.props.donorsList.map((donor, index) => {
        return (
          <li className="list-group-item" key={donor.donorId}>
            {`${donor.personId.firstName} ${donor.personId.lastName}`}
            <div className="float-right red">
              <span
                className="showDonorDetailText"
                id={`donorShowDetailButton${donor.donorId}`}
                onClick={this.showDonor.bind(this, donor.donorId)}
              >
                show detail
              </span>
              <FontAwesomeIcon
                className="deleteIcon"
                icon="trash"
                size="lg"
                onClick={this.deleteDonor.bind(this, donor.donorId)}
              />
            </div>
            <div id={`donorDetailDiv${donor.donorId}`} className="hide">
              {this.state.donors[`donor${donor.donorId}`] !== undefined &&
                this.renderDonorDetail(donor.donorId, index)}
            </div>
          </li>
        );
      });
    else
      return (
        <div className="d-flex align-items-center">
          <strong>Loading...</strong>
          <div
            className="spinner-border ml-auto"
            role="status"
            aria-hidden="true"
          />
        </div>
      );
  };

  onClickCreateDonor = () => {
    this.setState({ createDonorClicked: true });
  };

  renderMainHeader = ({ Heading }) => {
    if (this.state.createDonorClicked === false || this.state.renderMe === true)
      return (
        <Row>
          <Col xs={4}>
            <h1 className="float-left">{Heading}</h1>
          </Col>
          <Col xs={3} className="createDonorCol">
            <Button className="button" onClick={this.onClickCreateDonor}>
              <p className="buttonText">Create Donor</p>
            </Button>
          </Col>
          <Col>
            <Row className="createDonorTag ">
              <Col className="rightR">
                <h4 className="red">
                  <u>Add Donor List</u>
                </h4>
              </Col>
              <Col className="leftR">
                <input className="float-right" type="file" accept="text/csv" />
              </Col>
            </Row>
          </Col>
        </Row>
      );
    else
      return (
        <Row>
          <Col>
            <h1 className="center">{Heading}</h1>
          </Col>
        </Row>
      );
  };

  render() {
    if (this.state.createDonorClicked === false || this.state.renderMe === true)
      return (
        <Container>
          <this.renderMainHeader Heading="Donors List" />
          <Container className="scroll">
            <ul className="list-group">
              <this.renderDonors />
            </ul>
          </Container>
        </Container>
      );
    else
      return (
        <Container>
          <this.renderMainHeader Heading="Create Donor" />
          <Container className="scroll">
            <CreateDonor renderMe={true} />
          </Container>
        </Container>
      );
  }
}

function mapStateToProps(state) {
  return { donorsList: state.donors.list, donor: state.donors.donor };
}

export default connect(mapStateToProps, { deleteDonor, getDonors, getDonor })(
  ManageDonors
);
