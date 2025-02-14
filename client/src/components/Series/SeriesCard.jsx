import React from 'react';
import Card from 'react-bootstrap/Card';

const getPosterUrl = (backdrop_path) =>{
    return `https://media.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`
}
const SeriesCard = ({name, overview, first_air_date, backdrop_path}) => {
  const overviewArray = overview.split("");
  const overCopy = overviewArray.splice(0, 200);
  return (
    <div>
      <div>
        <div
      href="#"
      className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg focus:outline-none focus:shadow-lg transition w-80" // Added w-80 for standard card width
    >
      <img
        className="w-full h-60 object-cover rounded-t-xl" // Added h-48 for a fixed image height
        src={getPosterUrl(backdrop_path)}
        alt="Series Image"
      />
      <div className="p-4 md:p-5 overflow-y-auto max-h-32 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="mt-1 text-gray-500">
            {overview}
        </p>
        <p className="mt-1 text-black-500">
            Release Date:{first_air_date}
        </p>
      </div>
   </div>
    </div>
        
    </div>
  )
}

export default SeriesCard