import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem style={{ display: "flex" }}>
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Home
          </Link>

          <Link to="/about" className="nav-link" style={{ color: "white" }}>
            About Us
          </Link>
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;
