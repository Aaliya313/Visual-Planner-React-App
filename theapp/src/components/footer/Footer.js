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
        <Navbar.Brand href="/">VisualPlanner</Navbar.Brand>
        <Navbar className="my-nav-links" id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Planner">Planner</Nav.Link>
            <Nav.Link href="/">Meetings</Nav.Link>
            <Nav.Link href="/">Tasks</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Footer;
