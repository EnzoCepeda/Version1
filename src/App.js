import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link


} from "react-router-dom";
import Inicio from './components/Inicio';
import Burgers from './components/Burgers';


function App() {
  return (
    <>

    <Router>
     <Routes>
          <Route path="/" element={<Inicio/>}>
          </Route> 
          <Route path="/burgers" element={<Burgers/>}>
          </Route> 
     </Routes>
 
    </Router>

    </>

  );
}

export default App;
