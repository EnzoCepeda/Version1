import React from 'react';
import DivMid1 from './DivMid1';
import Navbar from "./Navbar";
import './Navbar.css';
import Saludo from './Saludo';


function Burgers() {
  return (
    <>
    <div className="BGhead">
    <Navbar/>
    <DivMid1/>
    </div>
    </>
    
  );
}

export default Burgers;
