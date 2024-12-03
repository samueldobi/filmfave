import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <div className='hero-section'>
      <Container fluid className='d-flex align-items-center justify-content-center min-vh-100'>
        <Row>
        <Col xs={12} className="text-center">
          <p className='text-light text-center'>Your Personalized Movie Guide</p>
          <p className='text-light'>FilmFave is your go-to for movie recommendations. Tell us what you like, and we'll suggest films you'll love.</p>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero