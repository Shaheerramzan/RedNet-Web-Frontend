import React from "react";
import { Col, Row } from "react-bootstrap";

import "../CSS/Homepage.css";

const Options = ({ options }) => {
  return (
    <Row>
      <Col className="left-panel-option">
        {options.map((option, i) => (
          <i key={i}>
            <div className="option-box">
              <span className="option-text">{option}</span>
            </div>
          </i>
        ))}
      </Col>
    </Row>
  );
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    if (props.component === "Society Admin")
      this.state.option = ["Manage Donors", "Complains"];
    if (props.component === "Society Head")
      this.state.option = ["Manage Donors", "Complains"];
    if (props.component === "Super Admin")
      this.state.option = ["Manage Donors", "Complains"];
  }

  componentDidMount() {}

  render() {
    return (
      <Row className="left-row">
        <Col xs="2" className="left-panel">
          <Row>
            <Col className="left-panel-header">
              <div id="LeftPanelHeader">
                <i className="huge user circle icon" />
                <div className="ui divider" />
                <span className="user-name">{this.props.Name}</span>
              </div>
            </Col>
          </Row>
          <div className="ui hidden divider" />
          <Options options={this.state.option} />
        </Col>
        <Col xs="10" className="" />
      </Row>
    );
  }
}

export default HomePage;
