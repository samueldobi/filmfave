import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import TopMovies from './components/TopMovies';

function App() {
  // const [backendData, setBackendData] =  useState([{}]);

  // useEffect(()=>{
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data =>{
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  return (
    <Router>
    <div className='app-body'>
    <NavigationBar/>
    <div className="content-body">
      <Routes>
          <Route path='/' element = {<Hero /> }/>
          <Route path = '/topmovies'  element = {<TopMovies/>} />
      </Routes>
 
    </div>
    </div>
    </Router>
  )
}

export default App