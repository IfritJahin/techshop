import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import '../assets/home.css';
import Home_p from './home_p';
import appleImg from '../img/app3.jpg';
import apple2Img from '../img/app1.jpg';
import apple3Img from '../img/app2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight as faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowLeft as faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
function Home() {
  const [homeproIndex, sethomeproIndex] = useState(0);
  const prevPro = () => {
    console.log("Prev button clicked");
    if (homeproIndex > 0) sethomeproIndex(homeproIndex - 1);
  }

  const nextPro = () => {
    console.log("Next button clicked");
    if (homeproIndex < Home_p.length - 1) sethomeproIndex(homeproIndex + 1);
  }


  return (
    <main>

      <Carousel data-bs-theme="light" className='content-below-header' >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={appleImg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className='ff-inherit'>First slide label</h2>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={apple2Img}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className='ff-inherit'>First slide label</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-auto"
            src={apple3Img}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className='ff-inherit'>First slide label</h2>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h2 className='hp'>Popular Products</h2>
      <section className='popular'>
        <Button><FontAwesomeIcon icon={faCircleArrowLeft} size="2x" style={{ color: "#a5b5cf", }} /></Button>
        <button className="left-arrow" onClick={prevPro}><FontAwesomeIcon icon={faCircleArrowLeft} size="2x" style={{ color: "#a5b5cf", }} /></button>
        <div className='p_product' style={{ transform: `translateX(-${homeproIndex * 100}%)` }}>
          {
            Home_p.map((curElement) => {
              return (
                <div className='boxes' key={curElement.id}>
                  <div className='box'>
                    <img src={curElement.img} alt=''></img>
                    <div className="box-content">
                      <span className="box-title">{curElement.Name || 'Product Name'}</span>
                      <h4 className="box-description">{curElement.type || 'Product Description'}</h4>
                      <p className="box-price">Price: {curElement.price}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className="right-arrow" onClick={nextPro}><FontAwesomeIcon icon={faCircleArrowRight} size="2x" style={{ color: "#a5b5cf", }} /></button>
      </section>
    </main>
  );
};

export default Home;
