import React, { useEffect } from 'react';
import Select from "react-select";
import { useState } from 'react';
import axios from 'axios';
import MovieFilterCard from './MovieFilterCard.jsx';
import { getFilteredMovies } from '../../utilities/apiEndpoints.js';
import Pagination from '../Pagination/Pagination.jsx';


const genres = [
  {value : 28, label: "Action"},
  {value : 12, label: "Adventure"},
  {value : 16, label: "Animation"},
  {value : 35, label: "Comedy"},
  {value : 80, label: "Crime"},
  {value : 18, label: "Drama"},
  {value : 10751, label: "Family"},
  {value : 14, label: "Fantasy"},
  {value : 36, label: "History"},
  {value : 9648, label: "Mystery"},
  {value : 10749, label: "Romance"},
  {value : 878, label: "Science Fiction"},
  {value : 53, label: "Thriller "},
  {value : 10752, label: "War "},
];
const keywords = [
  { value: 818, label: "Love" },
  { value: 9715, label: "Superhero" },
  { value: 33788, label: "Friendship" },
];
const years = Array.from({length: 46}, (_,i)=>{
  const year = 2025 - i;
  return {value :year , label: year}
})
const MovieFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] =  useState(1);

    useEffect(()=>{
      // If no changes are made, no api call is made
      if (selectedGenres.length === 0 && selectedKeywords.length === 0 && selectedYears.length === 0) return;

      const genreQuery = selectedGenres.map((g) => g.value).join("|");
      const keywordQuery = selectedKeywords.map((k) => k.value).join(",");
      const yearQuery = selectedYears.map((y) => y.value).join("|");
      const fetchData = async () =>{
        try {
           // apikey
          const apiKey = import.meta.env.VITE_API_KEY;
           const response = await getFilteredMovies({
            genres: genreQuery,
            keywords: keywordQuery,
            years: yearQuery
          });
          const movieData = response.data
          setMovies(movieData)
        } catch(error){
          console.log('Error getting data', error)
        }
      }
      fetchData();
    }, [selectedGenres, selectedKeywords, selectedYears])

  const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#1f2937', 
    borderColor: '#374151', 
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#1f2937', 
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white', 
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#374151', 
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white', 
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#2563eb' : '#1f2937', 
    color: 'white',
  }),
   placeholder: (provided) => ({
    ...provided,
    color: '#fff', // 
    fontStyle: 'italic',
  }),
};

    const moviesPerPage = 3;
    // Calculate the total number of pages
    const totalPages = Math.ceil(movies.length / moviesPerPage)
    // Get the movie for the current page 
    const currentMovies = movies.slice(
      (currentPage - 1) * moviesPerPage,
      currentPage * moviesPerPage
    )
    // Function to Handle Page Change
    const handlePageChange = (pageNumber) =>{
      setCurrentPage(pageNumber);
      window.scrollTo(0, 0);
    }


  return (
    <div className="movie-filter-body min-h-screen bg-gray-900 p-6 md:p-12">
  {/* Page Heading */}
  <h1 className="text-center text-white font-bold mb-8 text-xl sm:text-2xl lg:text-4xl lg:leading-tight">
    Find your next favorite movie -{" "}
    <span className="text-blue-500">filter by genre, rating, and more!</span>
  </h1>

  {/* Filters */}
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-12">
    <div className="flex-1">
      <Select
        options={genres}
        isMulti
        placeholder="Select Genres"
        onChange={setSelectedGenres}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={customSelectStyles}
      />
    </div>
    <div className="flex-1">
      <Select
        options={keywords}
        isMulti
        placeholder="Select Keywords"
        onChange={setSelectedKeywords}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={customSelectStyles}
      />
    </div>
    <div className="flex-1">
      <Select
        options={years}
        isMulti
        placeholder="Select Years"
        onChange={setSelectedYears}
        className="react-select-container"
        classNamePrefix="react-select"
        styles={customSelectStyles}
      />
    </div>
  </div>

  {/* Results Heading */}
  <h3 className="text-white text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
    Results:
  </h3>

  {/* Movie Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {currentMovies && currentMovies.length > 0 ? (
      currentMovies.map((movie, index) => (
        <MovieFilterCard key={index} {...movie} />
      ))
    ) : (
      <p className="text-white col-span-full text-center">
        No results for this input, try a different combination
      </p>
    )}
  </div>
  {/*  Pagination Component */}
  <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
</div>


  )
}

export default MovieFilter