/** @format */
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Nav.Link>
              <Link to="/planner">Planner</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/meetings">Meetings</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default Footer;
