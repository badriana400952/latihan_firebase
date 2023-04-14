import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './style.css'
import Carousell from './Carousell';


function NavbarComp
  () {
  return (
    <div>
      <Navbar className='nav' expand="lg">
        <Container>
          <Navbar.Brand href="/" className='logo colors'>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className='colors'>Home</Nav.Link>
              <Nav.Link href="megasale" className='colors'>MEGA SALE</Nav.Link>
              <Nav.Link href="women" className='colors'>Women</Nav.Link>
              <Nav.Link href="men" className='colors'>Men</Nav.Link>
              <Nav.Link href="herms" className='colors'>Hermes</Nav.Link>
              <Nav.Link href="watches" className='colors'>Watches</Nav.Link>
              <Nav.Link href="freeorder" className='colors'>Pre Order</Nav.Link>
              <Nav.Link href="desigeners" className='colors'>Designers</Nav.Link>
              <Nav.Link href="inspiration" className='colors'>Inspiration</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousell/>
      <Outlet />
    </div>
  );
}

export default NavbarComp
  ;