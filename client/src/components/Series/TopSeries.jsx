import React from 'react';
import {useState, useEffect} from 'react';
import SeriesCard from './SeriesCard.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import { getTopSeries } from '../../utilities/apiEndpoints.js';
import Pagination from '../Pagination/Pagination.jsx';


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
      const fetchTopSeries = async () => {
          try {
            const response = await getTopSeries();
            setSeries(response.data.results);
            console.log("Popular Series:", response);
          } catch (error) {
            console.error("Error fetching popular Series:", error);
          }
        };
        fetchTopSeries(); 
      window.scrollTo(0, 0);
    }, [])
  return (
    <div className=''>
        <Container className='p-3'>
        <h1 className="text-light text-center text-capitalize fw-bold m-3 p-3 fs-1 ">
            Top Rated Series
        </h1>
            <Row className=''>
                {currentSeries.map((serieList, index) =>{

                    return <Col key={index} xs={12} md={4} lg={4} className="mb-4 mx-auto ">
                    <SeriesCard {...serieList} />
                    </Col>
                })}
            </Row>
            {/* Pagination */}
                  <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
            {/* <Pagination className="justify-content-center m-3 p-3 paginate-div">
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
        </Pagination> */}
        </Container>
    </div>
  )
}

export default TopSeries