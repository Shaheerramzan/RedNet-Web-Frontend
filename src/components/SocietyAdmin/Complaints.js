import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

import { getComplaints, resolveComplaint } from "../../actions";

import "./CSS/Complaints.css";

class Complaints extends Component {
  componentDidMount() {
    this.props.getComplaints();
  }

  onSubmit = (Id) => {
    let Data = document.getElementById(`Textarea${Id}`).value;
    this.props.resolveComplaint({ Id, Data });
  };
  hideShow = (Id) => {
    document.getElementById(`replyField${Id}`).classList.remove("hide");
    document.getElementById(`replyField${Id}`).classList.add("show");
  };
  renderComplaintInside = ({ Id, From, About, Message, Header }) => {
    if (!Header) {
      return (
        <div>
          <Row className="center">
            <Col xs={1}>{From}</Col>
            <Col xs={1}>{About}</Col>
            <Col
              xs={10}
              className="cursor"
              onClick={this.hideShow.bind(this, Id)}
            >
              {Message}
            </Col>
          </Row>
          <Row id={`replyField${Id}`} className="hide">
            <Col>
              <Container>
                <form>
                  <div className="form-group">
                    <label className="font-weight-bold">Reply</label>
                    <Row>
                      <Col xs={10}>
                        <textarea
                          className="form-control"
                          id={`Textarea${Id}`}
                          rows="1"
                          placeholder="Enter your reply"
                        />
                      </Col>
                      <Col xs={2}>
                        <Button onClick={this.onSubmit.bind(this, Id)}>
                          Resolve
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </form>
              </Container>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <Row className="center">
          <Col xs={1}>{From}</Col>
          <Col xs={1}>{About}</Col>
          <Col xs={10}>{Message}</Col>
        </Row>
      );
    }
  };

  renderComplaints = ({ Complaints }) => {
    if (Complaints[0] !== undefined) {
      return (
        <ul className="list-group">
          <li className="list-group-item font-weight-bold" key="0">
            <this.renderComplaintInside
              From="From"
              About="About"
              Message="Complaint Message"
              Header={true}
            />
          </li>
          {Complaints.map((complaint) => {
            return (
              <li className="list-group-item" key={complaint.id}>
                <this.renderComplaintInside
                  Id={complaint.id}
                  From={`Aslam${complaint.id}`}
                  About={`Ali${complaint.userId}`}
                  Message={complaint.body}
                  Header={false}
                />
              </li>
            );
          })}
        </ul>
      );
    } else
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

  render() {
    return (
      <Container className="overflowContainer">
        <Row className="justify-content-center">
          <Col xs={2}>
            <h2>Complaints</h2>
          </Col>
        </Row>
        <this.renderComplaints Complaints={this.props.Complaints} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { Complaints: state.complaints };
}

export default connect(mapStateToProps, { getComplaints, resolveComplaint })(
  Complaints
);
