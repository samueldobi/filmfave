import React from 'react';
import MovieBtn from './MovieBtn';
import {Container,Row, Col} from 'react-bootstrap';


const Hero = () => {
  return (
    <div className='hero-section'>
      <Container fluid className='d-flex align-items-center justify-content-center hero-body'>
        <Row >
        <Col xs={12} className="text-center mb-5">
          <p className='text-light text-center fw-bold fs-1'>Your Personalized Movie Guide</p>
          <p className='text-light fs-5'>FilmFave is your go-to for movie recommendations. Tell us what you like, and we'll suggest films you'll love.</p>
        </Col>
       <Col className="text-center mt-5">
       <MovieBtn/>
       </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero