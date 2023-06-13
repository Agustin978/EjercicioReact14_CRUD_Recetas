import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>El rincón del sazón</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact className='nav-item nav-link' to={'/'}>Inicio</NavLink>
            <NavLink exact className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;