import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteDonor, getDonors } from "../../actions";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CSS/ManageDonor.css";

class ManageDonors extends Component {
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
    else return <div />;
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className="float-left">Donors List</h1>
            <h3 className="float-right red createDonorTag">
              <u>Create Donor</u>
            </h3>
          </Col>
        </Row>
        <Container>
          <ul className="list-group">
            <this.renderDonors />
          </ul>
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
