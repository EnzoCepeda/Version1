import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  
  
  } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardRData = [
  { 
      
      "img": "/cantimpalo.jpg"        
  }
  ,
  { 
      
      "img": './capresse.jpg'
  }
  ,
  {  
     
      "img": "/especial.jpg"
  }
  ,
  { 
      
      "img": './muzzarella.jpg'
  }
  ,
  {  
     
      "img": "/napolitana.jpg"
  }
  ,
  { 
      
      "img": './pizzafuga.jpg'
  }
  ,
  {  
     
      "img": "/pizzaroque.jpg"
  }
  ,
  {  
     
      "img": "/pizza4q.jpg"
  }
  ];

function  CardRight () {
  return ( 
    <Container>
        <Row> 
          {
            CardRData.map((e) => {
            return (
                          
                  <Col lg={3}>
                    <Card style={{
                      borderColor:'gray', 
                      marginTop:'10px'   
                    }}>
                    <Card.Img  src={e.img} width="150px"/> 
                    </Card>
                  </Col>
                

            )
            })
          }
        </Row>
      </Container> 
 
  );

}


export default  CardRight;

