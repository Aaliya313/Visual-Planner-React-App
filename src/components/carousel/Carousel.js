/** @format */
import Carousel from "react-bootstrap/Carousel";
import "../carousel/style.css";
import { Link } from 'react-router-dom';
<Link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'></Link>

function CarouselSection() {
  return (
    <Carousel className="carousel-style">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/0x0.jpg?format=jpg&width=1200"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Too many tasks?</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.onecalendar.nl/images/onecalendar.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>No need to worry anymore!</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://expertreviews.b-cdn.net/sites/expertreviews/files/2019/09/best_planners_primary.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>You got to the right place!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;
