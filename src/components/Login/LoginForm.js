import React from "react";
import { Container, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import GetDonors from "../../apis/GetDonors";

import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginForm.css";

const validate = (values, props) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter Name Or Email";
  }
  if (!values.password) {
    errors.password = "Enter Password";
  }
  return errors;
};

class LoginForm extends React.Component {
  renderField = ({
    type,
    label,
    placeholder,
    input,
    meta: { touched, error },
  }) => {
    return (
      <Container className="input-container form-group">
        <label className="white label">{label}</label>
        <input
          className="form-control"
          {...input}
          type={type}
          placeholder={placeholder}
        />
        <div className="error">
          {touched && error && <span className="alert-danger">{error}</span>}
        </div>
      </Container>
    );
  };

  onSubmit = ({ username, password }) => {
    GetDonors.get("/person/", {
      username,
      password,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <Form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="login-form"
      >
        <Field
          name="username"
          placeholder="Enter your Email or Phone Number"
          component={this.renderField}
          label="Email / Phone"
          type="text"
        />
        <Field
          name="password"
          placeholder="Enter your Password"
          component={this.renderField}
          label="Password"
          type="password"
        />
        <div className="button-div">
          <button type="submit" className="btn btn-danger">
            Login
          </button>
        </div>
      </Form>
    );
  }
}

export default reduxForm({ form: "LoginForm", validate })(LoginForm);
