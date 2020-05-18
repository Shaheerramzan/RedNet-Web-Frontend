import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../Common/Components/Header";
import LoginForm from "./LoginForm";
import { getData } from "../../actions";
import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginMainpage.css";

let close = true;

class LoginMainPage extends React.Component {
  componentDidMount() {
    this.props.getData();
    close = true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.login.error < this.props.login.error) {
      close = true;
      this.forceUpdate();
    }
  }
  CloseAlert = () => {
    close = false;
    this.forceUpdate();
  };

  render() {
    const Name = this.props.location.state.text;
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="2" />
        {close && this.props.login.error !== undefined && (
          <Row className="justify-content-center">
            <Col xs={6}>
              <div
                className="alert alert-danger alert-dismissible show fade"
                role="alert"
                id="alert-danger"
              >
                <strong>Try again</strong> Your entered Username or Password is
                incorrect
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  onClick={this.CloseAlert.bind(this)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
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
              <LoginForm
                Name={this.props.location.state.link}
                Role={this.props.location.state.Role}
              />
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
