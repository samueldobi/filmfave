import React from 'react';
import {useState, useEffect} from 'react';
import SeriesCard from './SeriesCard';
import { Col, Container, Row } from 'react-bootstrap';


const TopSeries = () => {
    const [series, setSeries] = useState([]);

    useEffect(()=>{
        fetch("/api/topseries")
        .then(
            response => response.json()
        )
        .then(
                data => {
                console.log(data.results)
                setSeries(data.results)
                }
           )
    }, [])
  return (
    <div className=' m-3 p-3'>
        <Container>
            <Row>
                {series.map((serieList, index) =>{

                    return <Col key={index} xs={12} md={4} lg={4} className="mb-4">
                    <SeriesCard {...serieList} />
                    </Col>
                })}
            </Row>
        </Container>
    </div>
  )
}

export default TopSeries