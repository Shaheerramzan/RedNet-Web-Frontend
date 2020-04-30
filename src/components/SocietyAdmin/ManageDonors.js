import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteDonor, getDonor, getDonors} from "../../actions";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CSS/ManageDonor.css";
import CreateDonor from "./CreateDonor";

class ManageDonors extends Component {
  constructor(props) {
    super(props);
    this.state = {createDonorClicked: false};
  }

  componentDidMount() {
    this.props.getDonors();
  }

  deleteDonor = (id) => {
    this.props.deleteDonor(id);
  };

  showDonor = (id) => {
    let editText = document.getElementById(`donorShowDetailButton${id}`);
    let donorDetail = document.getElementById(`donorDetail${id}`);

    if (editText.innerText === "show detail") {
      editText.innerText = "hide detail";
      donorDetail.classList.add("show");
      donorDetail.classList.remove("hide");
    } else {
      editText.innerText = "show detail";
      donorDetail.classList.add("hide");
      donorDetail.classList.remove("show");
    }
    this.props.getDonor(id);
  };

  renderDonorDetail = ({id}) => {
    if (this.props.donor) {
      if (this.props.donor.id === id) {
        return (
            <Container className="hide" id={`donorDetail${id}`}>
              <Form>
                <Row>
                  <Col className="form-group">
                    <label htmlFor="First Name">First Name</label>
                    <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={this.props.donor.id}
                    />
                  </Col>
                  <Col className="form-group">
                    <label htmlFor="Last Name">Last Name</label>
                    <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={this.props.donor.name}
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
                        value={this.props.donor.username}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="form-group">
                    <label htmlFor="E-mail">E-mail</label>
                    <input
                        type="email"
                        readOnly
                        className="form-control"
                        value={this.props.donor.email}
                    />
                  </Col>
                  <Col className="form-group">
                    <label htmlFor="Phone Number">Phone Number</label>
                    <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={this.props.donor.phone}
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
                        value={this.props.donor.address.city}
                    />
                  </Col>
                  <Col className="form-group">
                    <label htmlFor="Area">Area</label>
                    <input
                        type="text"
                        readOnly
                        className="form-control"
                        value={this.props.donor.address.street}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="form-group">
                    <label htmlFor="Gender">Gender</label>
                    <select className="form-control" disabled={true} value="male">
                      <option>female</option>
                      <option>male</option>
                    </select>
                  </Col>
                  <Col className="form-group">
                    <label htmlFor="Blood Group">Blood Group</label>
                    <select className="form-control" disabled={true} value="B+">
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
      } else {
        let donorDetail = document.getElementById(`donorDetail${id}`);
        return (
            <Container className="hide" id={`donorDetail${id}`}>
              {donorDetail.innerHTML}
            </Container>
        );
      }
    } else return <Container className="hide" id={`donorDetail${id}`}/>;
  };

  renderDonors = () => {
    if (this.props.donorsList)
      return this.props.donorsList.map((donor) => {
        return (
            <li className="list-group-item" key={donor.id}>
              {donor.name}
              <div className="float-right red">
              <span
                  className="showDonorDetailText"
                  id={`donorShowDetailButton${donor.id}`}
                  onClick={this.showDonor.bind(this, donor.id)}
              >
                show detail
              </span>
                <FontAwesomeIcon
                    className="deleteIcon"
                    icon="trash"
                    size="lg"
                    onClick={this.deleteDonor.bind(this, donor.id)}
                />
              </div>
              <this.renderDonorDetail id={donor.id}/>
            </li>
        );
      });
    else return <div/>;
  };

  onClickCreateDonor = () => {
    this.setState({createDonorClicked: true});
  };

  renderMainHeader = ({Heading}) => {
    if (this.state.createDonorClicked === false)
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
                  <input className="float-right" type="file" accept="text/csv"/>
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
    if (this.state.createDonorClicked === false)
      return (
          <Container>
            <this.renderMainHeader Heading="Donors List"/>
            <Container className="scroll">
              <ul className="list-group">
                <this.renderDonors/>
              </ul>
            </Container>
          </Container>
      );
    else
      return (
          <Container>
            <this.renderMainHeader Heading="Create Donor"/>
            <Container className="scroll">
              <CreateDonor/>
            </Container>
          </Container>
      );
  }
}

function mapStateToProps(state) {
  return {donorsList: state.donors.list, donor: state.donors.donor};
}

export default connect(mapStateToProps, {deleteDonor, getDonors, getDonor})(
    ManageDonors
);
