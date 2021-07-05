import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">CITY RIDER</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/Destination">Destination</Nav.Link>
                    <Nav.Link href="/Blog">Blog</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>                
                </Nav>
                <Button variant="danger">Login</Button>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;