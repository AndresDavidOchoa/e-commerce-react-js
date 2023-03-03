import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        Gamerizate
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/category/nintendo'>
                            Nintendo
                        </Nav.Link>
                        <Nav.Link as={Link} to='/category/psn'>
                            Psn
                        </Nav.Link>
                        <Nav.Link as={Link} to='/category/xbox'>
                            Xbox
                        </Nav.Link>
                        <Nav.Link as={Link} to='/nosotros'>
                            Nosotros
                        </Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
            
        </>
    )
}

export default NavBar;