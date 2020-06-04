import { useState } from 'react'
import Link from 'next/link'
import Lottie from 'react-lottie'
import movieAnimation from '../public/lottie/1879-movie-loading.json'
import { 
  Container, 
  Navbar, 
  Nav, 
  NavItem, 
  NavbarToggler, 
  Collapse 
} from 'reactstrap'


const NavBar = () => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: movieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const style = { color: '#fff', fontSize: '1.25rem', marginLeft: '-1rem', cursor: 'pointer', textDecoration: 'none' }

  return (
    <Navbar style={{padding: 0}} className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <Container>
        <Link href="/">
          <a className="navbar-brand" >
            <Lottie options={defaultOptions}
              height={80}
              width={80}
            /></a>
        </Link>
        <Link href="/">
          <a style={style}>SPY ON MOVIE DB</a>
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