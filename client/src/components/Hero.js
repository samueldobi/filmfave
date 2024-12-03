import React from 'react';
import MovieBtn from './MovieBtn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <div className='hero-section'>
      <Container fluid className='d-flex align-items-center justify-content-center hero-body'>
        <Row>
        <Col xs={12} className="text-center">
          <p className='text-light text-center fw-bold fs-1'>Your Personalized Movie Guide</p>
          <p className='text-light fs-4'>FilmFave is your go-to for movie recommendations. Tell us what you like, and we'll suggest films you'll love.</p>
        </Col>
       <Col className="text-center">
       <MovieBtn/>
       </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero