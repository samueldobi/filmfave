import React from 'react'
import Basic from './components/Basic';
import Hero from './components/Hero';

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
    <>
    <Basic/>
    <div className="content-body">
    <Hero />
    </div>
    </>
  )
}

export default App