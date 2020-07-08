import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../Common/Components/Header";
import CreateEntity from "../Common/Components/CreateEntity";

import "./CSS/CreateSociety.css";

class CreateSociety extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="2" Name="Create Society Admin" Create={true} />
        <div className="container abc">
          <CreateEntity CreateSociety={true} />
        </div>
      </Container>
    );
  }
}
export default CreateSociety;
