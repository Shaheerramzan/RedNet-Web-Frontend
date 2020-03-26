import React from "react";
import { Container, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

import "./LoginHomepage.css";
import "./LoginForm.css";

const validate = (values, props) =>{
    const errors = {};
    console.log(props);
    if(!values.name)
    {
        errors.name = "Enter Name Or Email";
    }
    if(!values.password)
    {
        errors.password = "Enter Password";
    }

    return errors;
};

const renderField = ({ type, label, placeholder, input, meta: {touched, error} }) => {
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

const LoginForm = (props) => {
    console.log(props);
    const { handelSubmit, pristine, submitting } = props;
  return (
    <Form className="login-form" onSubmit={handelSubmit}>
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
        <button type="submit" className="btn btn-danger" disabled={pristine || submitting}>
          Login
        </button>
      </div>
    </Form>
  );
};

export default reduxForm({ form: "LoginForm", validate})(LoginForm);
