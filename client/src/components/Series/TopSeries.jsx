import React from 'react';
import {useState, useEffect} from 'react';
import SeriesCard from './SeriesCard.jsx';
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
        <div className='p-3'>
        <h1 className="text-light text-center text-capitalize fw-bold m-3 p-3 fs-1 ">
            Top Rated Series
        </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {currentSeries.map((serieList, index) =>{
                    return <div key={index} xs={12} md={4} lg={4} className="mb-4 mx-auto ">
                    <SeriesCard {...serieList} />
                    </div>
                })}
            </div>
            {/* Pagination */}
                  <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
          
        </div>
    </div>
  )
}

export default TopSeries