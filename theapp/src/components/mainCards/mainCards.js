/** @format */

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import "../mainCards/style.css";
import { Link } from 'react-router-dom';

function MainCards() {
  return (
    <CardGroup className="main-cards-group">
      <Card>
        <Card.Body>
          <Card.Title>Planner</Card.Title>
          <Card.Text>
            A simple and easy way to organise your work.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="/planner">
            <Button variant="outline-primary">Check it now!</Button>{" "}
          </Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Meetings</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary">Check it now!</Button>{" "}
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Tasks</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary">Check it now!</Button>{" "}
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default MainCards;
