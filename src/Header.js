import React from "react";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import logoHeader from "./header-logo.png";
import SearchIcon from "@mui/icons-material/Search";
// import './ShowProduct.css';
export default function Footer() {
  return (
    <>
      <div className="navbar imageDiv  bg-danger  navbar-expand">
        {/* <Navbar className="container-fluid bg-danger text-dark">  */}
        <div className="container-fluid">
          <Nav.Link href="">num</Nav.Link>
          <Nav.Link href="">num</Nav.Link>
        </div>
        <div className="container-fluid">
          <div className="sidebarSearch">
            <div className="sidebarSearchContainer">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search product"
              />
            </div>
          </div>
          <Nav.Link href="">num</Nav.Link>
          <Nav.Link href="">num</Nav.Link>
          <Nav.Link href="">num</Nav.Link>
          <Nav.Link href="">num</Nav.Link>
        </div>
      </div>
      <div className="imageDiv navbar">
        <Navbar className="text-dark bg-light container-fluid imageDiv">
          <img height="50px" width="150px" className="" src={logoHeader} />
          <Nav className="navbar-expand">
            <Nav.Link href="/" className="Nav_link">
              Home
            </Nav.Link>
            <Nav.Link href="/category" className="Nav_link">
              Category
            </Nav.Link>
            <Nav.Link href="/productBase" className="Nav_link">
              Products
            </Nav.Link>
            <Nav.Link href="/news-and-blogs" className="Nav_link">
              News and Blogs
            </Nav.Link>
            <Nav.Link href="/csr" className="Nav_link">
              CSR
            </Nav.Link>
            <Nav.Link href="/geographical-presence" className="Nav_link">
              Geographical Presence
            </Nav.Link>
            <Nav.Link href="/career" className="Nav_link">
              Career
            </Nav.Link>
            <Nav.Link href="/gallery" className="Nav_link">
              Gallery
            </Nav.Link>
            <Nav.Link href="/contact-us" className="Nav_link">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/about-us" className="Nav_link">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}

