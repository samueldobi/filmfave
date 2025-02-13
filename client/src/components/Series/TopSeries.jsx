import React from 'react';
import {useState, useEffect} from 'react';
import SeriesCard from './SeriesCard.jsx';
import { Col, Container, Row, Pagination } from 'react-bootstrap';


const TopSeries = () => {
    const [series, setSeries] = useState([]);
    const [ currentPage, setCurrentPage] = useState(1);
    const seriesPerPage = 3;
    // Get the total number of pages
    const totalPages = Math.ceil(series.length/seriesPerPage);
    // Get the series for the current Page
    const currentSeries = series.slice(
        (currentPage - 1) * seriesPerPage,
        currentPage * seriesPerPage
    )
    // Handle Page Change
    const handlePageChange = (pageNumber) =>{ 
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    }

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
                {currentSeries.map((serieList, index) =>{

                    return <Col key={index} xs={12} md={4} lg={4} className="mb-4">
                    <SeriesCard {...serieList} />
                    </Col>
                })}
            </Row>
            <Pagination className="justify-content-center m-3 p-3 paginate-div">
          <Pagination.First  onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages).keys()].map(pageNumber => (
            <Pagination.Item 
              key={pageNumber + 1}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
        </Container>
    </div>
  )
}

export default TopSeries