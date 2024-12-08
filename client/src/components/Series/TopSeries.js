import React from 'react';
import {useState, useEffect} from 'react';

const TopSeries = () => {
    const [series, setSeries] = useState([]);

    useEffect(()=>{
        fetch("api/topseries")
        .then(
            response => response.json()
        )
        .then(
            data => {
            console.log(data.results)
            setSeries(data.results)
        }
        )
    })
  return (
    <div></div>
  )
}

export default TopSeries