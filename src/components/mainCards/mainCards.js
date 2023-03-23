/** @format */

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import "../mainCards/style.css";
import { Link } from "react-router-dom";

function MainCards() {
  return (
    <CardGroup className="main-cards-group">
      <Card>
        <Card.Body>
          <Card.Title>Planner</Card.Title>
          <Card.Text>A simple and easy way to organise your work.</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/planner">
            <Button id="card-btn" variant="outline-primary">
              Check it now!
            </Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Meetings</Card.Title>
          <Card.Text>
            Now you can display all your meetings in the same place, sorted by
            hour!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/meetings">
            <Button id="card-btn" variant="outline-primary">
              Check it now!
            </Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default MainCards;
