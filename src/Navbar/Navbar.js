import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">React Button</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;