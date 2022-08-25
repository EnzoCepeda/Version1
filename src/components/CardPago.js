import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  
  
  } from "react-router-dom";
import Card from 'react-bootstrap/Card';


const CardPData = [
  { 
  
      "img": "/dnipago.jpg"        
  }
  ,
  { 
  
      "img": './mpago.jpeg'
  }
  ];

function  CardPago () {
  return ( 

    <div style={{marginLeft:'50px', marginTop: '25px' }}>

    {CardPData.map((e) =>
    
    {
    return (
      
      <Card style={{
       borderColor:'gray',
       width: '9rem',
       marginTop:'10px'   
       }}>
      
       <Card.Img variant="top" src={e.img} width="100px"/> 
      </Card>
       
      
    )
    
    })
  
    }

</div>
  );

}


export default  CardPago;

