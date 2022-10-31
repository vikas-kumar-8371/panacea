import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../App.css';

function Header() {
    return (
        <><div>
            <Navbar fixed='top' bg="secondary" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link as={Link} to={"/home"} style={{ fontWeight: "bold" }} >Home</Nav.Link>
                            <Nav.Link as={Link} to={"/services"} style={{ fontWeight: "bold" }}>Services</Nav.Link>
                            <Nav.Link as={Link} to={"/about"} style={{ fontWeight: "bold" }}>AboutUS</Nav.Link>
                            <Nav.Link as={Link} to={"/contact"} style={{ fontWeight: "bold" }}>ContactUS</Nav.Link>
                            <Nav.Link as={Link} to={"/login"} style={{ fontWeight: "bold" }}>EmployeeLogin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>                   
                    <Navbar.Brand style={{ color: 'white', fontWeight: "bold" }}>PANACEA SOLUTION</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
        </>
    )
}
export default Header;