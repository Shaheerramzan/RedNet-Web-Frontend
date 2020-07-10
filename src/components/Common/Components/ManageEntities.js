import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSocietyRequest,
  getSocietyRequests,
  deleteSocietyRequest,
  deleteDonor,
  getDonor,
  getDonors,
  deleteSocietyAdmin,
  getSocietyAdmin,
  getSocietyAdmins,
  getSocieties,
  deleteSociety,
  getSociety,
  getData,
  setCancelState,
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
      userType: this.props.userType,
      societyAdmins: {},
      societies: {},
      societyRequests: {},
    };
  }

  componentDidMount() {
    getData();
    if (this.state.userType === 1) {
      this.setState({ userName: "Donor" });
      this.props.getDonors(this.props.societyId);
    }
    if (this.state.userType === 2) {
      this.setState({
        userName: "Society Admin",
      });
      this.props.getSocietyAdmins(this.props.societyHeadId);
    }
    if (this.state.userType === 3) {
      if (this.props.Super) {
        this.setState({
          userName: "Society Request",
        });
        this.props.getSocietyRequests();
      } else {
        this.setState({
          userName: "Society",
        });
        this.props.getSocieties();
      }
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
    if (
      this.props.society &&
      this.state.societies[`society${this.props.society.societyId}`] ===
        undefined
    ) {
      let v = this.state.societies;
      v[`society${this.props.society.societyId}`] = this.props.society;
      this.setState({
        societies: v,
      });
    }
    if (this.props.Super) {
      if (
        this.props.societyRequest &&
        this.state.societyRequests[
          `societyRequest${this.props.societyRequest.societyRequestId}`
        ] === undefined
      ) {
        let v = this.state.societyRequests;
        v[
          `societyRequest${this.props.societyRequest.societyRequestId}`
        ] = this.props.societyRequest;
        this.setState({
          societyRequest: v,
        });
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return !(
      (this.props.donor &&
        this.state.donors[`donor${this.props.donor.donorId}`] === undefined) ||
      (this.props.societyAdmin &&
        this.state.societyAdmins[
          `societyAdmin${this.props.societyAdmin.societyAdminId}`
        ] === undefined) ||
      (this.props.society &&
        this.state.societies[`society${this.props.society.societyId}`] ===
          undefined) ||
      (this.props.societyRequest &&
        this.state.societyRequests[
          `societyRequest${this.props.societyRequest.societyRequestId}`
        ] === undefined)
    );
  }

  deleteEntity = (id) => {
    if (this.props.userType === 1) this.props.deleteDonor(id);
    if (this.props.userType === 2) this.props.deleteSocietyAdmin(id);
    if (this.props.userType === 3)
      if (this.props.Super) this.props.deleteSocietyRequest(id);
      else this.props.deleteSociety(id);
  };

  showEntity = (id) => {
    if (this.props.userType === 1) {
      this.setState({ donorId: id });
    }
    if (this.props.userType === 2) {
      this.setState({ societyAdminId: id });
    }
    if (this.props.userType === 3) {
      if (this.props.Super) this.setState({ societyRequestId: id });
      else this.setState({ societyId: id });
    }
    let editText = this.props.Super
      ? document.getElementById(`entityShowDetailButtonSuper${id}`)
      : document.getElementById(`entityShowDetailButton${id}`);
    let entityDetail = this.props.Super
      ? document.getElementById(`entityDetailDivSuper${id}`)
      : document.getElementById(`entityDetailDiv${id}`);

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
    if (this.props.userType === 3) {
      if (this.props.Super) {
        if (!this.state.societyRequests[`societyRequest${id}`]) {
          this.props.getSocietyRequest(id);
        }
      } else {
        if (!this.state.societies[`society${id}`]) {
          this.props.getSociety(id);
        }
      }
    }
  };

  ApproveSociety = (id) => {};

  fillDetailForm = ({
    societyId,
    societyAdminId,
    donorId,
    societyRequestId,
    name,
    description,
    personByHeadId,
    personId,
  }) => {
    const entityId =
      this.props.userType === 1
        ? donorId
        : this.props.userType === 2
        ? societyAdminId
        : this.props.userType === 3
        ? this.props.Super
          ? societyRequestId
          : societyId
        : "";
    const selector = this.props.Super ? personByHeadId : personId;
    if (selector)
      return (
        <Container
          id={
            this.props.Super
              ? `entityDetailSuper${entityId}`
              : `entityDetail${entityId}`
          }
        >
          <Form>
            <Row>
              <Col className="form-group">
                <label htmlFor="First Name">First Name</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={selector.firstName}
                />
              </Col>
              <Col className="form-group">
                <label htmlFor="Last Name">Last Name</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={selector.lastName}
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
                  value={selector.username}
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
                  value={selector.email}
                />
              </Col>
              <Col className="form-group">
                <label htmlFor="Phone Number">Phone Number</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={selector.phone1}
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
                  value={selector.city}
                />
              </Col>
              <Col className="form-group">
                <label htmlFor="Area">Area</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={selector.area}
                />
              </Col>
            </Row>
            <Row>
              <Col className="form-group">
                <label htmlFor="Gender">Gender</label>
                <select
                  className="form-control"
                  disabled={true}
                  value={selector.gender}
                >
                  <option>female</option>
                  <option>male</option>
                </select>
              </Col>
              <Col className="form-group">
                <label htmlFor="Blood Group">Blood Group</label>
                <select
                  className="form-control"
                  disabled={true}
                  value={selector.bloodGroup}
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
            <Row>
              <Col className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  readOnly
                  className="form-control"
                  value={name}
                />
              </Col>
              <Col className="form-group">
                <label htmlFor="description">description</label>
                <textarea
                  readOnly
                  className="form-control"
                  value={description}
                />
              </Col>
            </Row>
          </Form>
        </Container>
      );
    else {
      console.log(entityId);
      return <Container id={`entityDetail${entityId}`} />;
    }
  };

  renderEntityDetail = (id) => {
    if (this.props.userType === 1 && this.state.donors[`donor${id}`]) {
      return this.fillDetailForm(this.state.donors[`donor${id}`]);
    } else if (
      this.props.userType === 2 &&
      this.state.societyAdmins[`societyAdmin${id}`]
    )
      return this.fillDetailForm(this.state.societyAdmins[`societyAdmin${id}`]);
    else if (this.props.userType === 3 && this.state.societies[`society${id}`])
      return this.fillDetailForm(this.state.societies[`society${id}`]);
    else if (
      this.props.Super &&
      this.state.societyRequests[`societyRequest${id}`]
    ) {
      return this.fillDetailForm(
        this.state.societyRequests[`societyRequest${id}`]
      );
    } else return <Container id={`entityDetail${id}`} />;
  };

  renderEntities = () => {
    const EntityList =
      this.props.userType === 1
        ? this.props.donorsList
        : this.props.userType === 2
        ? this.props.societyAdminsList
        : this.props.userType === 3
        ? this.props.Super
          ? this.props.societyRequestsList
          : this.props.societiesList
        : {};
    if (
      this.props.userType === 1
        ? this.props.donorsList
        : this.props.userType === 2
        ? this.props.societyAdminsList
        : this.props.userType === 3
        ? this.props.Super
          ? this.props.societyRequestsList
          : this.props.societiesList
        : false
    )
      return EntityList.map((entity) => {
        const entityId =
          this.props.userType === 1
            ? entity.donorId
            : this.props.userType === 2
            ? entity.societyAdminId
            : this.props.userType === 3
            ? this.props.Super
              ? entity.societyRequestId
              : entity.societyId
            : 0;
        return (
          <li className="list-group-item" key={entityId}>
            <Row>
              {this.props.userType === 3 && (
                <Col xs={2}>
                  <div className="float-left">
                    <span>{entity.name}</span>
                  </div>
                </Col>
              )}
              {this.props.userType !== 3 && (
                <Col xs={2}>
                  <div className="float-left">
                    <span>{`${entity.personId.firstName} ${entity.personId.lastName}`}</span>
                  </div>
                </Col>
              )}
              {this.props.userType === 1 && (
                <Col xs={1}>
                  <span> {entity.personId.bloodGroup}</span>
                </Col>
              )}
              <Col xs={7} />
              {this.props.Super && (
                <Col>
                  <div className="float-right red">
                    <span
                      className="showEntityDetailText"
                      id={`entityApproveButton${entityId}`}
                      onClick={this.ApproveSociety.bind(this, entityId)}
                    >
                      Approve
                    </span>
                  </div>
                </Col>
              )}
              <Col>
                <div className="float-right red">
                  <span
                    className="showEntityDetailText"
                    id={
                      this.props.Super
                        ? `entityShowDetailButtonSuper${entityId}`
                        : `entityShowDetailButton${entityId}`
                    }
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
            <div
              id={
                this.props.Super
                  ? `entityDetailDivSuper${entityId}`
                  : `entityDetailDiv${entityId}`
              }
              className="hide"
            >
              {(this.state.donors[`donor${entityId}`] !== undefined ||
                this.state.societyAdmins[`societyAdmin${entityId}`] !==
                  undefined ||
                this.state.societies[`society${entityId}`] !== undefined ||
                this.state.societyRequests[`societyRequest${entityId}`] !==
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
    this.props.setCancelState(false);
  };

  renderMainHeader = ({ Heading }) => {
    if (this.props.isCancelClicked) {
      Heading =
        this.props.userType === 1
          ? "Donor List"
          : this.props.userType === 2
          ? "Society Admin List"
          : this.props.userType === 3
          ? "Society List"
          : this.props.userType === 3 && this.props.Super
          ? "Society Request"
          : "";
      return (
        <Row>
          <Col xs={4}>
            <h1 className="float-left">{Heading}</h1>
          </Col>
          {(this.props.userType === 1 || this.props.userType === 2) && (
            <Col xs={3} className="CreateEntityCol">
              <Button
                type="button"
                className="btn-block"
                onClick={this.onClickCreateEntity}
              >
                {this.props.userType === 1
                  ? "Create Donor"
                  : this.props.userType === 2
                  ? "Create SocietyAdmin"
                  : ""}
              </Button>
            </Col>
          )}
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
          <Col xs={3} className="justify-content-center">
            <h1 className="center">{Heading}</h1>
          </Col>
        </Row>
      );
  };

  render() {
    if (this.props.isCancelClicked)
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
          <this.renderMainHeader
            Heading={
              this.props.userType === 1
                ? "Create Donor"
                : this.props.userType === 2
                ? "Create Society Admin"
                : ""
            }
          />
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
    societiesList: state.society.list,
    society: state.society.society,
    societyRequestsList: state.societyRequest.list,
    societyRequest: state.societyRequest.societyRequest,
    isCancelClicked: state.login.isCancelClicked,
  };
}

export default connect(mapStateToProps, {
  getSocietyRequest,
  getSocietyRequests,
  deleteSocietyRequest,
  deleteDonor,
  getDonors,
  getDonor,
  deleteSocietyAdmin,
  getSocietyAdmin,
  getSocietyAdmins,
  getSociety,
  getSocieties,
  deleteSociety,
  getData,
  setCancelState,
})(ManageEntities);
