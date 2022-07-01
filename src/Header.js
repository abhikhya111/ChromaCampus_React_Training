import React from 'react';
import './Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoHeader from './header-logo.png';
export default function Footer() {
  return (
       <div className='header-body container-fluid'>
      <Navbar className="text-dark bg-light ">
        <Navbar.Brand href="#home"><img height="60px" src={logoHeader} /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/category" className='Nav_link'>Home</Nav.Link>
          <Nav.Link href="/productBase" className='Nav_link'>Products</Nav.Link>
          <Nav.Link href="/news-and-blogs" className='Nav_link'>News and Blogs</Nav.Link>
          <Nav.Link href="/csr" className='Nav_link'>CSR</Nav.Link>
          <Nav.Link href="/geographical-presence" className='Nav_link'>Geographical Presence</Nav.Link>
          <Nav.Link href="/career" className='Nav_link'>Career</Nav.Link>
          <Nav.Link href="/gallery" className='Nav_link'>Gallery</Nav.Link>
          <Nav.Link href="/contact-us" className='Nav_link'>Contact Us</Nav.Link>
          <Nav.Link href="/about-us" className='Nav_link'>About Us</Nav.Link>
        </Nav>
      </Navbar>
    </div>
    )
}

