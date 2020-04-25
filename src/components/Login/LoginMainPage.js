import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Common/Components/Header";
import LoginForm from "./LoginForm";
import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginMainpage.css";

class LoginMainPage extends React.Component {
  render() {
    const Name = this.props.location.state.text;
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="2" />
        <Row>
          <Col className="login-col">
            <Container className="login-main-div">
              <div className="login-text-div">
                <span className="white">{Name}</span>
              </div>
              <LoginForm Name={this.props.match.params.name} />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null, null)(LoginMainPage);
