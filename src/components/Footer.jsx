import React from 'react'
import { Link } from 'react-router-dom';
import fb from '../img/fb.png';
import insta from '../img/insta.png';
import lk from '../img/lk.png';
import '../assets/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
function Footer() {
  return (
    <div className='footer'>
      <div >
        <img src={fb} alt='fb' className='icon'></img>
        <img src={insta} alt='insta' className='icon'></img>
        <img src={lk} alt='lk' className='icon'></img>
      </div>
      <div className='footertext'>© 2023 copyright all right reserved by None</div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Footer
