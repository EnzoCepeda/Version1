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
  
      "img": "/facebook.png"  ,
      "link": "https://www.facebook.com/rotiseria.lasabuelas"    
  }
  ,
  { 
  
      "img": './instagram.png',
      "link": "https://www.instagram.com/rotiserialasabuelas/"
  }
  ,
  { 
  
      "img": './whatsapp.png',
      "link": "https://www.instagram.com/rotiserialasabuelas/"
  }
  ];

function  CardRedes () {
  return ( 

    <div style={{marginLeft:'50px', marginTop: '25px' }}>

    {CardPData.map((e) =>
    
    {
    return (
      
      <Card style={{
       marginLeft:'30%',
       width: '2rem',
       marginTop:'10px'   
       }}>
       <Link to={e.link}>
       <Card.Img variant="top" src={e.img} width="20px"/> 
       </Link>
      </Card>
       
      
    )
    
    })
  
    }

</div>
  );

}


export default  CardRedes;

