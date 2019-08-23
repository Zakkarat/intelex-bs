import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavStyles } from "../stylesheets/style-components";
import { navElems } from "../libs/nav.json";

const NavigationBar = () => {
  return (
    <NavStyles>
      <Navbar className="border-underlined" bg="light" expand="md">
        <Container>
          <Navbar.Brand className="bigger-brand">Intelex</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              {navElems.map(
                elem => {
                  const [key, value] = Object.entries(elem)[0]
                  return (
                    <Nav.Link
                      className="nav-font-adjust"
                      key={key}
                      href={key}
                    >
                      {value}
                    </Nav.Link>
                  );
                }
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavStyles>
  );
};

export default NavigationBar;
