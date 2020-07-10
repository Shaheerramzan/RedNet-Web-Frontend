import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import {
  createDonor,
  createSocietyAdmin,
  getData,
  setCancelState,
} from "../../../actions";
import { Link } from "react-router-dom";

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
  if (!values.LastDonatedDate) {
    errors.LastDonatedDate = "Enter Last Blood Donated Date";
  } else {
    let last_donated = new Date(values.LastDonatedDate);
    if (last_donated.getTime() > new Date().getTime()) {
      errors.LastDonatedDate = "Enter a valid Last Blood Donated Date";
    }
  }
  if (!values.Name) {
    errors.Name = "Enter a Society Name";
  }
  if (!values.Description) {
    errors.Description = "Enter some detail for Society";
  }
  return errors;
};

class CreateEntity extends React.Component {
  componentDidMount() {
    getData();
  }

  setCancel = () => {
    this.props.setCancelState(true);
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
        <label htmlFor={label}>
          <b>{label}</b>
        </label>
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
  renderTextAreaField = ({
    label,
    placeholder,
    input,
    type,
    meta: { touched, error },
  }) => {
    return (
      <Col className="form-group">
        <label htmlFor={label}>
          <b>{label}</b>
        </label>
        <textarea
          {...input}
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
        <label htmlFor={label}>
          <b>{label}</b>
        </label>
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
      formData.append("Type", "1");
      this.props.createDonor(formData);
    }
    if (this.props.userType === 2) {
      formData.append("Type", "2");
      this.props.createSocietyAdmin(formData);
    }
    if (this.props.CreateSociety) {
      formData.append("Type", "x");
      this.props.createSocietyAdmin(formData);
    }
  };

  render() {
    return (
      <div>
        {!this.props.RequestFeature && (
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
              {this.props.userType === 1 && (
                <Row>
                  <Field
                    name="LastDonatedDate"
                    placeholder="Enter your last donation date"
                    label="Last Donation Date"
                    type="date"
                    component={this.renderField}
                  />
                </Row>
              )}
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
              {this.props.CreateSociety && (
                <Row>
                  <Field
                    name="Name"
                    label="Society Name"
                    placeholder="Enter name of the Society"
                    type="text"
                    component={this.renderField}
                  />
                </Row>
              )}
              {this.props.CreateSociety && (
                <Row>
                  <Field
                    name="Description"
                    label="Society Description"
                    placeholder="Enter some detail of the Society"
                    component={this.renderTextAreaField}
                  />
                </Row>
              )}
              <div className="ui hidden divider" />
              <Row className="justify-content-center">
                <Col xs={2}>
                  <button type="submit" className="btn btn-danger">
                    Create
                  </button>
                </Col>
                {!this.props.CreateSociety && (
                  <Col xs={2}>
                    <button
                      className="btn btn-danger"
                      onClick={this.setCancel.bind(this)}
                    >
                      Cancel
                    </button>
                  </Col>
                )}
                {this.props.CreateSociety && (
                  <Col xs={2}>
                    <Link className="btn btn-danger" to={{ pathname: "/" }}>
                      Cancel
                    </Link>
                  </Col>
                )}
              </Row>
              <div className="ui hidden divider" />
            </Form>
          </Container>
        )}
        {this.props.RequestFeature && (
          <Container>
            <h1>Request Feature</h1>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Row>
                <Field
                  name="FeatureName"
                  placeholder="Enter the name for your feature"
                  label="Feature Name"
                  type="text"
                  component={this.renderField}
                />
              </Row>
              <Row>
                <Field
                  name="FeatureDescription"
                  placeholder="Enter description for your feature"
                  label="Feature Description"
                  type="text"
                  component={this.renderTextAreaField}
                />
              </Row>
              <div className="ui hidden divider" />
              <Row className="justify-content-center">
                <Col xs={2}>
                  <button type="submit" className="btn btn-danger">
                    Add
                  </button>
                </Col>
              </Row>
              <div className="ui hidden divider" />
            </Form>
          </Container>
        )}
      </div>
    );
  }
}

CreateEntity = connect(null, {
  createDonor,
  createSocietyAdmin,
  setCancelState,
  getData,
})(CreateEntity);

export default reduxForm({ form: "CreateEntity", validate })(CreateEntity);
