import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet} from 'react-router-dom';
import Carou from './Carou';
import User from './User';

const NavbarC = () => {
    return (
        <div>
        <Navbar expand="lg" className="nav fixed-top" >
            <Container>
                
                    <Navbar.Brand className='teksNav'>
                    <Link to='/' className='teksNav'>IZZAH Vashions</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='teksNav'>Home</Link>
                            <Link to='women' className='teksNav'>Women</Link>
                            <Link to='men' className='teksNav'>Men</Link>
                            <Link to='baby' className='teksNav'>Baby</Link>
                        </Nav>
                    </Navbar.Collapse>
                <h6 className='user'>User</h6>
            </Container>
            
        </Navbar>
        <Outlet/>
        
        
        </div>
    );
}

export default NavbarC;