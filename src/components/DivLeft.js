import React from "react";
import CardPago from "./CardPago";
import CardRedes from "./CardReds";

import './DivLeft.css';

function DivLeft() {
    return ( 

       <div className="DivLeft">
       <h5 style={{
         marginLeft:'45px',
         marginTop:'20%',
         color:'gray'
       }}>Medios de pago</h5>
       <CardPago/>
       <h5 style={{
         marginLeft:'60px',
         marginTop:'40%',
         color:'gray'
       }}>Redes Sociales</h5>
       <CardRedes/>
       </div>
      
    );
  }
  
  export default DivLeft;