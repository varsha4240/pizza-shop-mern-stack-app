import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'; 
import {MdLocalOffer} from 'react-icons/md'
import "../App.css";

const Topbar = () => {
    return (
        <>
            <Navbar variant="dark" bg ='dark' expand="lg" style={{color:'white',fontFamily: 'Ubuntu, sans-serif'}}>
                <Container fluid>
                    <h6 className="text-light">
                   <MdLocalOffer className="text-warning"  / >&nbsp; &nbsp; &nbsp;
                   Free home Delivery on order above 500/- rupees</h6>
                    <Nav className="ms-auto">
                        <LinkContainer to="/" activeClassName>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" activeClassName>
                            <Nav.Link>About us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" activeClassName>
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/policy" activeClassName>
                            <Nav.Link>terms and policy</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Topbar;
