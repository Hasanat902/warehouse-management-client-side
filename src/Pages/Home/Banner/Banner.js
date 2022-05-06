import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Car Dealer in the town</h3>
            <p>We are the best car dealer in this country.If you want contact with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>We have all latest collections</h3>
            <p>Here you find all latest collections of cars in reasonable cost.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>We have various brands car collections</h3>
            <p>
              From here you get various brands cars and their latest collections.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
