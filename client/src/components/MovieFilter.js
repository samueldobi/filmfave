import React from 'react';
import {Container,Row, Col, Card} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Form, InputGroup } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

const MovieFilter = () => {
  return (
    <div>
     <p className="text-light  text-capitalize">
        Choose your preferences and let us do the rest
     </p>
     <Container>
        <Row>
            <Col xs={12} md={12} lg={12} className="m-5 p-3">
            <Card className=''>
                    {/* <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' /> */}
                    <Card.Body>
                        <Card.Title className='text-dark'>Year of release </Card.Title>
                        <Card.Text className='text-dark'>
                            Testing
                        </Card.Text>
                        <Card.Text className='text-dark'>
                        <p > release date: <span className='fw-bold'>Testing two</span></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
     </Container>
    </div>
  )
}

export default MovieFilter