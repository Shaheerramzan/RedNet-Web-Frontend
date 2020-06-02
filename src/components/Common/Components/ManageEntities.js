import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteDonor,
  getDonor,
  getDonors,
  deleteSocietyAdmin,
  getSocietyAdmin,
  getSocietyAdmins,
} from "../../../actions";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../CSS/ManageEntity.css";
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
      this.setState({ renderMe: this.props.renderMe, userName: "Donor" });
      this.props.getDonors(this.props.SocietyId);
    }
    if (this.state.userType === 2) {
      this.setState({
        renderMe: this.props.renderMe,
        userName: "Society Admin",
      });
      this.props.getSocietyAdmins(this.props.societyHeadId);
    }
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
    if (
      this.props.societyAdmin &&
      this.state.societyAdmins[
        `societyAdmin${this.props.societyAdmin.societyAdminId}`
      ] === undefined
    ) {
      let v = this.state.societyAdmins;
      v[
        `societyAdmin${this.props.societyAdmin.societyAdminId}`
      ] = this.props.societyAdmin;
      this.setState({
        societyAdmins: v,
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(
      (this.props.donor &&
        this.state.donors[`donor${this.props.donor.donorId}`] === undefined) ||
      (this.props.societyAdmin &&
        this.state.societyAdmins[
          `societyAdmin${this.props.societyAdmin.societyAdminId}`
        ] === undefined)
    );
  }

  deleteEntity = (id) => {
    if (this.props.userType === 1) this.props.deleteDonor(id);
    if (this.props.userType === 2) this.props.deleteSocietyAdmin(id);
  };

  showEntity = (id) => {
    if (this.props.userType === 1) {
      this.setState({ donorId: id });
    }
    if (this.props.userType === 2) {
      this.setState({ societyAdminId: id });
    }
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
    if (this.props.userType === 1) {
      if (!this.state.donors[`donor${id}`]) {
        this.props.getDonor(id);
      }
    }
    if (this.props.userType === 2) {
      if (!this.state.societyAdmins[`societyAdmin${id}`]) {
        this.props.getSocietyAdmin(id);
      }
    }
  };

  fillDetailForm = ({
    societyAdminId,
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
    const entityId =
      this.props.userType === 1
        ? donorId
        : this.props.userType === 2
        ? societyAdminId
        : 0;
    return (
      <Container id={`entityDetail${entityId}`}>
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

  renderEntityDetail = (id) => {
    if (this.props.userType === 1 && this.state.donors[`donor${id}`]) {
      return this.fillDetailForm(this.state.donors[`donor${id}`]);
    } else if (
      this.props.userType === 2 &&
      this.state.societyAdmins[`societyAdmin${id}`]
    )
      return this.fillDetailForm(this.state.societyAdmins[`societyAdmin${id}`]);
    else return <Container id={`entityDetail${id}`} />;
  };

  renderEntities = () => {
    const EntityList =
      this.props.userType === 1
        ? this.props.donorsList
        : this.props.userType === 2
        ? this.props.societyAdminsList
        : {};
    if (
      this.props.userType === 1
        ? this.props.donorsList
        : this.props.userType === 2
        ? this.props.societyAdminsList
        : false
    )
      return EntityList.map((entity) => {
        const entityId =
          this.props.userType === 1
            ? entity.donorId
            : this.props.userType === 2
            ? entity.societyAdminId
            : 0;
        return (
          <li className="list-group-item" key={entityId}>
            <Row>
              <Col xs={2}>
                <div className="float-left">
                  <span>{`${entity.personId.firstName} ${entity.personId.lastName}`}</span>
                </div>
              </Col>
              {this.props.userType === 1 && (
                <Col xs={1}>
                  <span> {entity.personId.bloodGroup}</span>
                </Col>
              )}
              <Col xs={7} />
              <Col>
                <div className="float-right red">
                  <span
                    className="showEntityDetailText"
                    id={`entityShowDetailButton${entityId}`}
                    onClick={this.showEntity.bind(this, entityId)}
                  >
                    show detail
                  </span>
                  <FontAwesomeIcon
                    className="deleteIcon"
                    icon="trash"
                    size="lg"
                    onClick={this.deleteEntity.bind(this, entityId)}
                  />
                </div>
              </Col>
            </Row>
            <div id={`entityDetailDiv${entityId}`} className="hide">
              {(this.state.donors[`donor${entityId}`] !== undefined ||
                this.state.societyAdmins[`societyAdmin${entityId}`] !==
                  undefined) &&
                this.renderEntityDetail(entityId)}
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

  onClickCreateEntity = () => {
    this.setState({ createEntityClicked: true });
  };

  renderMainHeader = ({ Heading }) => {
    if (
      this.state.createEntityClicked === false ||
      this.state.renderMe === true
    ) {
      Heading =
        this.props.userType === 1
          ? "Donor List"
          : this.props.userType === 2
          ? "Society Admin List"
          : "";
      return (
        <Row>
          <Col xs={4}>
            <h1 className="float-left">{Heading}</h1>
          </Col>
          <Col xs={3} className="CreateEntityCol">
            <Button
              type="button"
              className="btn-block"
              onClick={this.onClickCreateEntity}
            >
              {this.props.userType === 1
                ? "Create Donor"
                : this.props.userType === 2
                ? "Create Society Admin"
                : ""}
            </Button>
          </Col>
          {this.props.userType === 1 && (
            <Col>
              <Row className="CreateEntityTag ">
                <Col className="rightR">
                  <h4 className="red">
                    <u>Add Donor List</u>
                  </h4>
                </Col>
                <Col className="leftR">
                  <input
                    className="float-right"
                    type="file"
                    accept="text/csv"
                  />
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      );
    } else
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
          <this.renderMainHeader Heading="Donors List" />
          <Container className="scroll">
            <ul className="list-group">
              <this.renderEntities />
            </ul>
          </Container>
        </Container>
      );
    else
      return (
        <Container>
          <this.renderMainHeader Heading="Create Donor" />
          <Container className="scroll">
            <CreateEntity renderMe={true} userType={this.props.userType} />
          </Container>
        </Container>
      );
  }
}

function mapStateToProps(state) {
  return {
    donorsList: state.donors.list,
    donor: state.donors.donor,
    societyAdminsList: state.societyAdmin.list,
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
