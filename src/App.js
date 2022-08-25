import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link


} from "react-router-dom";
import Inicio from './components/Inicio';
import Hamburguesas from './components/Hamburguesas';
import Pizzas from './components/Pizzas';
import Empanadas from './components/Empanadas';
import Pedido from './components/Pedido';

function App() {
  return (
    <>

    <Router>
     <Routes>
          <Route path="/" element={<Inicio/>}>
          </Route>
          <Route path="/hamburguesas" element={<Hamburguesas/>}>
          </Route>
          <Route path="/pizzas" element={<Pizzas/>}>
          </Route>
          <Route path="/empanadas" element={<Empanadas/>}>
          </Route>
          <Route path="/pedido" element={<Pedido/>}>
          </Route>
     </Routes>
 
    </Router>

    </>

  );
}

export default App;
