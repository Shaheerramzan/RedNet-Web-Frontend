import React from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getData } from "../../../actions";

import "../CSS/Homepage.css";

class Options extends React.Component {
  OptionOnClick = (index, length) => {
    for (let i = 0; i < length; i++) {
      if (i === index) {
        document.getElementById(i.toString()).className =
          "highlight option-box";
        document.getElementById("div" + i.toString()).classList.remove("hide");
        document.getElementById("div" + i.toString()).classList.add("show");
      } else {
        document.getElementById(i.toString()).className =
          "un-highlight option-box";
        document.getElementById("div" + i.toString()).classList.remove("show");
        document.getElementById("div" + i.toString()).classList.add("hide");
      }
    }
  };

  render() {
    return (
      <Row>
        <Col className="left-panel-option">
          {this.props.options.map((option, i) => (
            <div
              key={i}
              id={i}
              className="option-box"
              onClick={this.OptionOnClick.bind(
                this,
                i,
                this.props.options.length
              )}
            >
              <span className="option-text">{option}</span>
            </div>
          ))}
        </Col>
      </Row>
    );
  }
}

class HomePage extends React.Component {
  person;
  firstName;
  lastName;
  constructor(props) {
    super(props);
    this.state = { options: [], Name: "" };
    if (props.component === "Society Admin")
      this.state.option = ["Manage Donors", "Complains"];
    else if (props.component === "Society Head")
      this.state.option = ["Manage Admins", "Add Feature"];
    else if (props.component === "Super Admin")
      this.state.option = ["Manage Society", "Society Requests", "Feedback"];
  }

  componentDidMount() {
    this.props.getData();
    if (this.props.data && this.state.Name === "") {
      this.setState({
        Name: `${this.props.data.person.firstName} ${this.props.data.person.lastName}`,
      });
    }
  }

  renderChildren = () => {
    if (this.props.children)
      return this.props.children.map((child, index) => {
        return (
          <div key={index} id={"div" + index} className="right-panel-div hide">
            {child}
          </div>
        );
      });
    else
      return (
        <div className="d-flex align-items-center white">
          <h1>
            <strong>Select option to view tab</strong>
          </h1>
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
      <Row className="left-row">
        <Col xs="2" className="left-panel">
          <Row>
            <Col className="left-panel-header">
              <div id="LeftPanelHeader">
                <i className="huge user circle icon" />
                <div className="ui divider" />
                <span className="user-name">{this.state.Name}</span>
              </div>
            </Col>
          </Row>
          <div className="ui hidden divider" />
          <Options options={this.state.option} />
          <div className="ui divider" />
        </Col>
        <Col xs="10" className="right-panel">
          {this.renderChildren()}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.login.data };
}

export default connect(mapStateToProps, { getData })(HomePage);
