import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createDonor, createSocietyAdmin } from "../../../actions";
import ManageEntities from "./ManageEntities";

const validate = (values) => {
  const errors = {};
  if (!values.FirstName) {
    errors.FirstName = "Enter Username";
  }
  if (!values.LastName) {
    errors.LastName = "Enter Username";
  }
  if (!values.Username) {
    errors.Username = "Enter Username";
  }
  if (!values.Password) {
    errors.Password = "Enter Password";
  }
  if (!values.Email) {
    errors.Email = "Enter Email";
  }
  if (!values.PhoneNumber) {
    errors.PhoneNumber = "Enter your Phone Number";
  }
  if (!values.City) {
    errors.City = "Enter City";
  }
  if (!values.Area) {
    errors.Area = "Enter your city Area";
  }
  if (!values.Gender) {
    errors.Gender = "Enter Gender";
  }
  if (!values.BloodGroup) {
    errors.BloodGroup = "Enter Blood Group";
  }
  return errors;
};

class CreateEntity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCancelClicked: false };
  }

  setCancel = () => {
    this.setState({ isCancelClicked: true });
  };

  renderField = ({
    label,
    placeholder,
    input,
    type,
    meta: { touched, error },
  }) => {
    return (
      <Col className="form-group">
        <label htmlFor={label}>{label}</label>
        <input
          {...input}
          type={type}
          className="form-control"
          placeholder={placeholder}
        />
        {touched && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </Col>
    );
  };

  renderOptionField = ({ label, input, options, meta: { touched, error } }) => {
    return (
      <Col className="form-group">
        <label htmlFor={label}>{label}</label>
        <select {...input} className="form-control">
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        {touched && error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
      </Col>
    );
  };

  onSubmit = (values) => {
    let formData = new FormData();
    for (const [key, value] of Object.entries(values)) {
      formData.append(key, value);
    }
    if (this.props.userType === 1) {
      this.props.createDonor(formData);
    }
    if (this.props.userType === 2) {
      this.props.createSocietyAdmin(formData);
    }
  };

  render() {
    if (this.state.isCancelClicked === true) {
      return <ManageEntities renderMe={true} userType={this.props.userType} />;
    } else
      return (
        <div>
          <Container>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Row>
                <Field
                  name="FirstName"
                  placeholder="Enter your first name"
                  label="First Name"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  name="LastName"
                  placeholder="Enter your last name"
                  label="Last Name"
                  type="text"
                  component={this.renderField}
                />
              </Row>
              <Row>
                <Field
                  name="Username"
                  placeholder="Enter your username"
                  label="Username"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  name="Password"
                  placeholder="Enter your password"
                  label="Password"
                  type="password"
                  component={this.renderField}
                />
              </Row>
              <Row>
                <Field
                  name="Email"
                  placeholder="Enter your email"
                  label="E-mail"
                  type="email"
                  component={this.renderField}
                />
                <Field
                  name="PhoneNumber"
                  placeholder="Enter your Phone Number"
                  label="Phone Number"
                  type="text"
                  component={this.renderField}
                />
              </Row>
              <Row>
                <Field
                  name="City"
                  placeholder="Enter your City"
                  label="City"
                  type="text"
                  component={this.renderField}
                />
                <Field
                  name="Area"
                  placeholder="Enter your Area"
                  label="Area"
                  type="text"
                  component={this.renderField}
                />
              </Row>
              <Row>
                <Field
                  name="Gender"
                  label="Gender"
                  options={["female", "male"]}
                  component={this.renderOptionField}
                />
                <Field
                  name="BloodGroup"
                  label="Blood Group"
                  options={["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]}
                  component={this.renderOptionField}
                />
              </Row>
              <div className="ui hidden divider" />
              <Row className="justify-content-center">
                <Col xs={2}>
                  <button type="submit" className="btn btn-danger">
                    Create
                  </button>
                </Col>
                <Col xs={2}>
                  <button
                    className="btn btn-danger"
                    onClick={this.setCancel.bind(this)}
                  >
                    Cancel
                  </button>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
      );
  }
}

CreateEntity = connect(null, { createDonor, createSocietyAdmin })(CreateEntity);

export default reduxForm({ form: "CreateEntity", validate })(CreateEntity);
