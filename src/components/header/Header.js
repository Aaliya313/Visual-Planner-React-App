/** @format */
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../header/style.css";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link id="my-links" to="/">
            VisualPlanner
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link id="my-links" to="/planner">
                Planner
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link id="my-links" to="/meetings">
                Meetings
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
