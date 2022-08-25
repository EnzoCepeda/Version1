import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  
  
  } from "react-router-dom";



function Navbar() {


    return (
    
     
      <div  className="Nv-body">
         
       
        <div id="Nv-links"> 
      
            <Link  id="NavbarA" to="/">
            <img src="/icono1.png" width="40px"/>
              ROTISERIA LAS ABUELAS
            </Link>
        </div> 
      </div>
    
     
     
    );
  }
  
  export default Navbar;
  