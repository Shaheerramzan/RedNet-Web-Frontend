import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import {connect} from "react-redux";

import Header from "../Common/Components/Header";
import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginHomepage.css";

const BloodDrop = ({ text, link }) => {
  return (
    <Col className="img-div">
      <Container className="blood-img">
        <Link to={{ pathname: `${link}/Login`, state: { text } }}>
          <div className="blood-text-div">
            <span className="white blood-text-span">{text}</span>
          </div>
        </Link>
      </Container>
    </Col>
  );
};

class LoginHomepage extends React.Component {
  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="1" />
        <Row>
          <BloodDrop text="Society Admin" link="society-admin" />
          <BloodDrop text="Society Head" link="society-head" />
          <BloodDrop text="Super Admin" link="super-admin" />
        </Row>
      </Container>
    );
  }
}
// function mapStateToProps(state) {
//     return { isLogin: state.login.isLogin };
// }
// export default connect(mapStateToProps, null)(LoginHomepage);
export default LoginHomepage;
