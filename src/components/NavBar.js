import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Gamerizate</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#nintendo">Nintendo</Nav.Link>
                        <Nav.Link href="#psn">Psn</Nav.Link>
                        <Nav.Link href="#xbox">Xbox</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
            
        </>
    )
}

export default NavBar;