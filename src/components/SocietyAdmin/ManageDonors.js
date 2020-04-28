import React, {Component} from "react";
import {connect} from "react-redux";
import {deleteDonor, getDonors} from "../../actions";
import {Button, Col, Container, Row} from "react-bootstrap";
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
    console.log(id);
    this.props.deleteDonor(id);
  };

  renderDonors = () => {
    if (this.props.donorsList)
      return this.props.donorsList.map((donor) => {
        return (
          <li className="list-group-item" key={donor.id}>
            {donor.name}
            <div className="float-right red">
              <FontAwesomeIcon
                  className="deleteIcon"
                  icon="trash"
                  size="lg"
                  onClick={this.deleteDonor.bind(this, donor.id)}
              />
            </div>
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
  return { donorsList: state.donors.list };
}

export default connect(mapStateToProps, { deleteDonor, getDonors })(
  ManageDonors
);
