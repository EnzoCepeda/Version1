import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CardRight from './Cards';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AlertPData = [
  { 
      
      "img": "/cantimpalo.jpg" ,
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"  
  }
  ,
  { 
      
      "img": './capresse.jpg',
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  {  
     
      "img": "/especial.jpg",
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  { 
      
      "img": './muzzarella.jpg',
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  {  
     
      "img": "/napolitana.jpg",
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  { 
      
      "img": './pizzafuga.jpg',
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  {  
     
      "img": "/pizzaroque.jpg",
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ,
  {  
     
      "img": "/pizza4q.jpg",
      "title": "MUZZARELLA",
      "info" : "Ingredientes: Salsa, mozzarella, oregano, aceitunas"
  }
  ];

function AlertP() {
  const [show, setShow] = useState(false);
  
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{e.title}</Alert.Heading>
        <p>
          {e.info}
        </p>
      </Alert>
  
    );
  
  }
  
  
  return  (
   
    <Container>
    <Row> 
      {
        AlertPData.map((e) => {
        return (
                      
              <Col lg={3}>
              <Button>
                <Card style={{
                  borderColor:'gray', 
                  marginTop:'10px'   
                }}>
                <Card.Img  src={e.img} width="150px"/> 
                </Card>
                </Button>
              </Col>
            

        )
        })
      }
    </Row>
  </Container> 

  
  )
}

export default AlertP ;