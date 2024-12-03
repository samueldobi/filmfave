import React from 'react'
import NavigationBar from './components/NavigationBar';
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
    <NavigationBar/>
    <div className="content-body">
    <Hero />
    </div>
    </>
  )
}

export default App