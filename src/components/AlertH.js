import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AlertP.css';

const AlertHData = [
  { 
    "id":1 ,
    "img": "/happy.jpg" , 
  }
  ,
  { 
    "id":2 ,
    "img": './goodburger.jpeg',

  }
  ,
  {  
    "id":3 , 
    "img": "/furiosa.jpg",

  }
  ,
  { 
    "id":4 ,
    "img": './lacueva.jpeg',

  }

  ];

function AlertP() {
  const [show, setShow] = useState(false);
  const [comida, setComida] = useState(AlertHData)
  if (show) {
    return (
      <Alert variant="secondary" id="AlertPBody" onClose={() => setShow(false)} dismissible>
        <Alert.Heading></Alert.Heading>
        <p>
        INFO
        </p>
      </Alert>
  
    );
  
  } 
  return  (
   
    <Container>
    <Row> 
      {
        AlertHData.map((e) => {
        return (
          <Col lg={4}>
            <Button id="AlertBotton"  style={{marginTop:'20px'}} onClick={() => setShow(true)}>
              <Card id={e.id} style={{borderColor:'gray', marginTop:'10px'}}>
                <Card.Img  src={e.img}/> 
              </Card>
            </Button>
          </Col> 
        )
        })
      }
    </Row>
  </Container>  
  );
}

export default AlertP ;