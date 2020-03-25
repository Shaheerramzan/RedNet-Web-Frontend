import React from "react";
import {Container} from "react-bootstrap";

import Header from "../Login/Header";
import "../Login/LoginHomepage.css"

const SuperAdminHomepage = () =>{

    return (
        <Container fluid className="bg-img">
            <Header ForHomepage={false} />
        </Container>

    );
};

export default SuperAdminHomepage;
