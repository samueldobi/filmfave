import React from 'react';
import {Container,Row, Col, Card} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { Form, InputGroup } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

const MovieFilter = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startYear, endYear] = dateRange;
  return (
    <div>
     <p className="text-light  text-capitalize text-center m-3 p-3">
        Choose your preferences and let us do the rest
     </p>
     <Container>
        <Row className='d-flex justify-content-center'>
            <Col xs={12} md={10} lg={12} className="m-5 p-3">
            <Card className=''>
                    {/* <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' /> */}
                    <Card.Body>
                        <Card.Title className='text-dark'>Year of release </Card.Title>
                            <Form.Group>
                  <Form.Label className=''>Select Year Range</Form.Label>
                      <DatePicker
                        selectsRange
                        minDate={new Date('1900-01-01')}
                        maxDate={new Date()}
                        dateFormat="yyyy"
                        showYearPicker
                        selected={startYear}
                        startDate={startYear}
                        endDate={endYear}
                        onChange={(update) => {
                          setDateRange(update);
                        }}
                        placeholderText="Select Year Range"
                        className="form-control"
                      />
                </Form.Group>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col xs={12} md={10} lg={12} className="mt-5 p-3">
          <Card className=''>
                    {/* <Card.Img variant="top" src={getPosterUrl(backdrop_path)} className='rounded ' /> */}
                    <Card.Body>
                        <Card.Title className='text-dark'>Choose different Genres </Card.Title>
                      </Card.Body> 
                </Card>
              </Col>            
        </Row>
        <Row className='d-flex justify-content-center'>
        <form >
        <div>
          <label>Date:</label>
          <input type="number" name="date" value="" />
        </div>
        <div>
          <label>Genres:</label>
          <input type="text" name="genres" value=""/>
        </div>
        <div>
          <label>Region:</label>
          <input type="text" name="region" value=""/>
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" step="0.1" name="rating" value="" />
        </div>
        <div>
          <label>Language:</label>
          <input type="text" name="language" value="" />
        </div>
        <div>
          <label>Keywords:</label>
          <input type="text" name="keywords" value="" />
        </div>
        <button type="submit">Filter Movies</button>
      </form>
        </Row>
     </Container>
    </div>
  )
}

export default MovieFilter