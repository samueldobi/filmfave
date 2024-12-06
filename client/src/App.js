import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom/cjs/react-router-dom.min";
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
    <Router>
    <div className='app-body'>
    <NavigationBar/>
    <div className="content-body">
    <Route>
      <Hero />
    </Route>
    </div>
    </div>
    </Router>
  )
}

export default App