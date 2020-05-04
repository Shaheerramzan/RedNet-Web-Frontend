import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Common/Components/Header";
import LoginForm from "./LoginForm";
import { getData } from "../../actions";
import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginMainpage.css";

class LoginMainPage extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const Name = this.props.location.state.text;
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="2" />
        {this.props.login.error !== undefined && (
          <Row className="justify-content-center">
            <Col xs={6}>
              <div className="alert alert-danger" role="alert">
                Enter correct Username or Password
              </div>
            </Col>
          </Row>
        )}
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

function mapStateToProps(state) {
  return { login: state.login };
}

export default connect(mapStateToProps, { getData })(LoginMainPage);
