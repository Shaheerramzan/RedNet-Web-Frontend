import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

import Header from "./Header";
import "./LoginHomepage.css";
import "./LoginMainpage.css";

const renderField = ({ type, label, placeholder, input }) => {
  return (
    <Container className="input-container form-group">
      <label className="white label">{label}</label>
      <input
        className="form-control"
        {...input}
        type={type}
        placeholder={placeholder}
      />
    </Container>
  );
};

class LoginMainPage extends React.Component {
  render() {
    const Name = this.props.location.state.text;
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage={false} />
        <Row>
          <Col className="login-col">
            <Container className="login-main-div">
              <div className="login-text-div">
                <span className="white">{Name}</span>
              </div>
              <Form className="login-form">
                <Field
                  name="name"
                  placeholder="Enter your Email or Phone Number"
                  component={renderField}
                  label="Email / Phone"
                  type="text"
                />
                <Field
                  name="password"
                  placeholder="Enter your Password"
                  component={renderField}
                  label="Password"
                  type="password"
                />
                <div className="button-div">
                <button type="submit" className="btn btn-danger">Login</button>
                </div>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default reduxForm({ form: "LoginForm" })(LoginMainPage);
