import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Field } from "redux-form";

import Header from "./Header";
import "./LoginHomepage.css";
import "./LoginMainpage.css";

class LoginMainPage extends React.Component {

  render() {
    const Name = this.props.location.state.text;
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage={false} />
        <Row>
          <Col>
            <Container className="login-main-div">
              <div className="login-text-div">
                <span className="white">{Name}</span>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(null, null)(LoginMainPage);
