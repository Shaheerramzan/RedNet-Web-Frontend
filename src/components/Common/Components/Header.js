import { Row, Col, Navbar } from "react-bootstrap";
import React from "react";
import { Redirect } from "react-router-dom";
import { doLogout } from "../../../actions";

import "../CSS/Header.css";
import { connect } from "react-redux";

class Header extends React.Component {
  componentDidMount() {}

  logout = () => {
    this.props.doLogout();
  };

  HeaderLogo = () => {
    return (
      <Col className="header-left-text">
        <Navbar.Text className="white">RED</Navbar.Text>
        &nbsp;
        <Navbar.Text className="red">NET</Navbar.Text>
      </Col>
    );
  };

  HeaderRightText = ({ text, onclick }) => {
    if (onclick)
      return (
        <Col className="right">
          <Navbar.Text
            className="white header-right-text click"
            onClick={this.logout.bind(this)}
          >
            {text}
          </Navbar.Text>
        </Col>
      );
    else
      return (
        <Col className="right">
          <Navbar.Text className="white header-right-text click">
            {text}
          </Navbar.Text>
        </Col>
      );
  };

  render() {
    if (
      (this.props.isLogin === null || this.props.isLogin === undefined) &&
      this.props.ForHomepage === "3"
    ) {
      return <Redirect to={`/`} />;
    } else {
      if (this.props.ForHomepage === "1")
        return (
          <Row className="main-header">
            <this.HeaderLogo />
            {this.HeaderRightText({
              text: "Register New Society",
              onclick: false,
            })}
          </Row>
        );
      else if (this.props.ForHomepage === "2")
        return (
          <Row className="main-header">
            <this.HeaderLogo />
          </Row>
        );
      else
        return (
          <Row className="main-header">
            <this.HeaderLogo />
            <Col className="Name">
              <Navbar.Text className="white header-name-text">
                {this.props.Name}
              </Navbar.Text>
            </Col>
            <this.HeaderRightText text="Logout" onclick={true} />
          </Row>
        );
    }
  }
}

function mapStateToProps(state) {
  return { isLogin: state.login.isLogin };
}

export default connect(mapStateToProps, { doLogout })(Header);
