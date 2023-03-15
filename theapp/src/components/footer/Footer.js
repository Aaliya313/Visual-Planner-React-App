/** @format */
import { Container, Nav, Navbar } from "react-bootstrap";
import "../footer/style.css";

function Footer() {
  return (
    <Navbar
      className="my-nav"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">VisualPlanner</Navbar.Brand>
        <Navbar className="my-nav-links" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Planner</Nav.Link>
            <Nav.Link href="#pricing">Meetings</Nav.Link>
            <Nav.Link href="#deets">Tasks</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Footer;
