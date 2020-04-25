import React from "react";
// import { Link } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";

import { doLogin } from "../../actions";

import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginForm.css";
import { connect } from "react-redux";

const validate = (values) => {
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
  constructor(props) {
    super(props);
    this.state = {};
    this.state = { HomepageLink: `/${this.props.Name}`, Name: null };
  }
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
    this.props.doLogin({ username, password });
    // BackendLink.post(
    //   "/login.action",
    //   `username=${username}&password=${password}`
    // )
    //   // .then(()=> {browserHistory.push(/society-admin/)})
    //   //   .then(()=> Response.redirect("/society-admin/"))
    //   .then(({ data: { firstname } }) => {
    //     console.log(firstname);
    //     this.setState({ Name: firstname });
    //     // history.push("/society-admin/");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    //count += 1;
    //console.log(count);
    //console.log(this.props);
  }

  render() {
    if (this.props.isLogin === true) {
      return <Redirect to={`/${this.props.Name}/`} />;
    } else if (this.props.isLogin === false)
      alert("Please Enter Correct Username or password");
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
          {/*<Link to={this.state.HomepageLink}>*/}
          <button type="submit" className="btn btn-danger">
            Login
          </button>
          {/*</Link>*/}
        </div>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return { isLogin: state.login.isLogin };
}

LoginForm = connect(mapStateToProps, { doLogin })(LoginForm);

export default reduxForm({ form: "LoginForm", validate })(LoginForm);
