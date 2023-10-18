import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import appleImg from '../img/apple2.jpg';
import appleImg2 from '../img/apple3.jpg';
import { Container } from 'react-bootstrap';

function Shop() {
    return (
        <Container fluid className="p-0"> {/* Made the container fluid and removed padding */}
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="w-100 d-block"
                        src={appleImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 d-block"
                        src={appleImg2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Shop;
