import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import {connect} from "react-redux";

import Header from "../Common/Components/Header";
import "../Common/CSS/CommonClasses.css";
import "./CSS/LoginHomepage.css";

const BloodDrop = ({ text, link, Role }) => {
  return (
    <Col className="img-div">
      <Container className="blood-img">
        <Link to={{ pathname: `${link}/Login`, state: { text, Role, link } }}>
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
          <BloodDrop text="Society Admin" link="society-admin" Role={1} />
          <BloodDrop text="Society Head" link="society-head" Role={2} />
          <BloodDrop text="Super Admin" link="super-admin" Role={3} />
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
