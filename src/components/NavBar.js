import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar className="navbar" variant="dark">
            <Container fluid>
                <Navbar.Brand className='navbar-brand'>CPTW</Navbar.Brand>
                <Nav.Link className='nav-link' as={Link} to="/">Home</Nav.Link>
            </Container>
        </Navbar>
    );
}