import React from "react";
import CarouselIni from "./CarouselIni";
import DivLeft from "./DivLeft";
import './DivMid1.css';


function DivMid1() {
    return (
<>
    
  <div className="MidBody">
  <DivLeft/>
      <div className="Body"> 
      
        <div>
       <CarouselIni/>     
       </div>
      </div>
  </div> 
  </>
    );
  }
  
  export default DivMid1;
  