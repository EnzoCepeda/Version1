import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './AlertP.css';

const ModalPData = [
    { 
      "id":1 ,
      "img": "/cantimpalo.jpg" , 
      "title": "PIZZA DE CANTIMPALO",
      "text": "ingredientes: Salsa, muzzarella, cantimpalo, aceitunas."
    }
    ,
    { 
      "id":2 ,
      "img": './capresse.jpg',
      "title": "PIZZA DE CAPRESSE",
      "text": "Ingredientes: Salsa, muzzarella, tomate, albahaca fresca, aceitunas."
    }
    ,
    {  
      "id":3 , 
      "img": "/especial.jpg",
      "title": "PIZZA ESPECIAL",
      "text": "Ingredientes: Salsa, muzzarella, jamon, morrones, aceitunas."
    }
    ,
    { 
      "id":4 ,
      "img": './muzzarella.jpg',
      "title": "PIZZA DE MUZZARELLA",
      "text": "Ingredientes: Salsa, muzzarella, aceitunas."
    }
    ,
    {  
      "id":5 ,
      "img": "/napolitana.jpg",
      "title": "PIZZA DE NAPOLITANA",
      "text": "Ingredientes: Salsa, muzzarella, tomate, provenzal, aceitunas."
    }
    ,
    { 
      "id":6 , 
      "img": './pizzafuga.jpg',
      "title": "PIZZA DE FUGAZETA",
      "text": "Ingredientes: Muzzarella, cebolla salteada, aceitunas."
    }
    ,
    {  
      "id":7 ,
      "img": "/pizzaroque.jpg",
      "title": "PIZZA DE ROQUEFORT",
      "text": "Ingredientes: Salsa, muzzarella, queso azul, aceitunas."
    }
    ,
    {  
      "id":8 ,
      "img": "/pizza4q.jpg",
      "title": "PIZZA DE 4 QUESOS",
      "text": "Ingredientes: Salsa, muzzarella, queso azul, cheddar, parmesano, aceitunas."
    }
    ];

function ModalP() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    
     ModalPData.map((e) => {
    <>
        <Col lg={4}>
        <Button className="AlertBotton"  style={{marginTop:'20px'}} onClick={() => setShow(true)}>
            <Card  style={{borderColor:'gray', marginTop:'10px'}}>
            <Card.Img  src={e.img}/> 
            </Card>
        </Button>
        </Col> 

      <Modal  className="AlertPBody"show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{e.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{e.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      
        })
     
  );
}

export default ModalP;