import React from 'react'
import './Header.css'
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar
                className='header-navbar'
                variant="dark" sticky='top'>
                <Container fluid className='header-container'>
                    <Navbar.Brand href="#home">NEWS</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="Business">Business</Nav.Link>
                        <Nav.Link href="Entertainment">Entertainment</Nav.Link>
                        <Nav.Link href="General">General</Nav.Link>
                        <Nav.Link href="Health">Health</Nav.Link>
                        <Nav.Link href="Science">Science</Nav.Link>
                        <Nav.Link href="Sports">Sports</Nav.Link>
                        <Nav.Link href="Technology">Technology</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header