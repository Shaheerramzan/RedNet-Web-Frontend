import React, {Component} from "react";
import {connect} from "react-redux";
import {
  deleteDonor,
  getDonor,
  getDonors,
  deleteSocietyAdmin,
  getSocietyAdmin,
  getSocietyAdmins,
} from "../../../actions";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./CSS/ManageEntity.css";
import CreateEntity from "./CreateEntity";

class ManageEntities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createEntityClicked: false,
      donors: {},
      renderMe: true,
      userType: this.props.userType,
      societyAdmins: {},
    };
  }

  componentDidMount() {
    if (this.state.userType === 1) {
      this.setState({renderMe: this.props.renderMe, userName: "Donor"});
      this.props.getDonors();
    }
    if (this.state.userType === 2) {
      this.setState({
        renderMe: this.props.renderMe,
        userName: "Society Admin",
      });
      this.props.getSocietyAdmins();
    }
  }

  deleteEntity = (id) => {
    if (this.props.userType === 1) this.props.deleteDonor(id);
    if (this.props.userType === 2) this.props.deleteSocietyAdmin(id);
  };

  showEntity = (id) => {
    this.setState({donorId: id});
    let editText = document.getElementById(`entityShowDetailButton${id}`);
    let entityDetail = document.getElementById(`entityDetailDiv${id}`);

    if (editText.innerText === "show detail") {
      editText.innerText = "hide detail";
      entityDetail.classList.add("show");
      entityDetail.classList.remove("hide");
    } else {
      editText.innerText = "show detail";
      entityDetail.classList.add("hide");
      entityDetail.classList.remove("show");
    }
    if (!this.state.donors[`donor${id}`]) {
      this.props.getDonor(id);
    }
  };

  fillDetailForm = ({
                      id,
                      name,
                      username,
                      email,
                      phone,
                      address: {street, city},
                    }) => {
    return (
        <Container id={`entityDetail${id}`}>
          <Form>
            <Row>
              <Col className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input type="text" readOnly className="form-control" value={id}/>
              </Col>
              <Col className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input
                    type="text"
                    readOnly
                    className="form-control"
                    value={name}
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
                    type="email"
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
                    value={phone}
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
                    value={street}
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
  };

  renderentityDetail = (id) => {
    if (this.props.donor) {
      if (this.props.donor.id === id) {
        if (!this.state.donors[`donor${id}`]) {
          let v = this.state.donors;
          v[`donor${id}`] = this.props.donor;
          console.log(v);
          this.setState({
            donors: v,
          });
        }
        return this.fillDetailForm(this.props.donor);
      } else {
        if (this.state.donors[`donor${id}`]) {
          return this.fillDetailForm(this.state.donors[`donor${id}`]);
        }
      }
    } else {
      return <Container id={`entityDetail${id}`}/>;
    }
  };

  renderDonors = () => {
    if (this.props.donorsList)
      return this.props.donorsList.map((donor) => {
        return (
            <li className="list-group-item" key={donor.id}>
              {donor.name}
              <div className="float-right red">
              <span
                  className="showEntityDetailText"
                  id={`entityShowDetailButton${donor.id}`}
                  onClick={this.showEntity.bind(this, donor.id)}
              >
                show detail
              </span>
                <FontAwesomeIcon
                    className="deleteIcon"
                    icon="trash"
                    size="lg"
                    onClick={this.deleteEntity.bind(this, donor.id)}
                />
              </div>
              <div id={`entityDetailDiv${donor.id}`} className="hide">
                {this.renderentityDetail(donor.id)}
              </div>
            </li>
        );
      });
    else return <div/>;
  };

  onClickCreateEntity = () => {
    this.setState({CreateEntityClicked: true});
  };

  renderMainHeader = ({Heading}) => {
    if (
        this.state.createEntityClicked === false ||
        this.state.renderMe === true
    )
      return (
          <Row>
            <Col xs={4}>
              <h1 className="float-left">{Heading}</h1>
            </Col>
            <Col xs={3} className="CreateEntityCol">
              <Button className="button" onClick={this.onClickCreateEntity}>
                <p className="buttonText">Create Donor</p>
              </Button>
            </Col>
            <Col>
              <Row className="CreateEntityTag ">
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
    if (
        this.state.createEntityClicked === false ||
        this.state.renderMe === true
    )
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
              <CreateEntity renderMe={true}/>
            </Container>
          </Container>
      );
  }
}

function mapStateToProps(state) {
  return {
    donorsList: state.donors.list,
    donor: state.donors.donor,
    societyAdminList: state.societyAdmin.list,
    societyAdmin: state.societyAdmin.societyAdmin,
  };
}

export default connect(mapStateToProps, {
  deleteDonor,
  getDonors,
  getDonor,
  deleteSocietyAdmin,
  getSocietyAdmin,
  getSocietyAdmins,
})(ManageEntities);
