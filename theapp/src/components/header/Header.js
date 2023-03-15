/** @format */
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">VisualPlanner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Planner</Nav.Link>
            <Nav.Link href="#pricing">Meetings</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Tasks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
