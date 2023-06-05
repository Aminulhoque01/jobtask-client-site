import React from 'react';


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
   
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">

                <Container>
                 

                    <Navbar.Brand>

                        <Link to='/' className='fw-bold text-decoration-none text-secondary'>
                            jOB Tasting
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        {/* <Nav>
                            <Nav.Link className='pt-3'>
                                
                               
                             

                         
                            </Nav.Link>
                            <Nav.Link>
                            <Nav className="me-auto">
                            <Nav.Link><Link to="/" className='fw-bold text-decoration-none text-secondary'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/course' className='fw-bold text-decoration-none text-secondary'>Courses</Link></Nav.Link>
                            <Nav.Link ><Link to='/faq' className='fw-bold text-decoration-none text-secondary'>FAQ</Link></Nav.Link>
                            <Nav.Link ><Link to='/blog' className='fw-bold text-decoration-none text-secondary'>Blog</Link></Nav.Link>
                            
                            
                        </Nav>
                                  
                                
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;