import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";

class SuperAdminHomepage extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Container fluid className="bg-img">
                <Header ForHomepage="3" Name="Super Admin" />
                <HomePage component="Super Admin" Name="Shaheer"/>
            </Container>
        );
    }
}

export default SuperAdminHomepage;
