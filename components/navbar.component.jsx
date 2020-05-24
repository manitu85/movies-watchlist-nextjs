import react, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Container, 
  Navbar, 
  Nav, 
  NavItem, 
  NavbarToggler, 
  Collapse 
} from 'reactstrap'

const NavBar = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <Container>
        <Link href="/">
          <a className="navbar-brand" >MOVIES DB</a>
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="navbar-nav ml-auto">
            <NavItem className="nav-item active">
              <Link href="/" >
                <a className="nav-link">Home
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link href="/about" >
                <a className="nav-link">About</a>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link href="/services" >
                <a className="nav-link">Services</a>
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link href="/contact" >
                <a className="nav-link">Contact</a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar