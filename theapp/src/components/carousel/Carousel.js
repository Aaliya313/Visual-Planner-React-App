/** @format */
import Carousel from "react-bootstrap/Carousel";
import "../carousel/style.css";

function CarouselSection() {
  return (
    <Carousel className="carousel-style">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.dreamstime.com/b/group-business-people-meeting-planning-41699625.jpg"
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
          src="https://st.depositphotos.com/1003593/2242/i/450/depositphotos_22420341-stock-photo-time-to-plan.jpg"
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
          src="https://cdn.xxl.thumbs.canstockphoto.com/planning-word-cloud-business-concept-pictures_csp25968080.jpg"
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
