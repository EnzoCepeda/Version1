import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './canvas.css'
import CardRight from './Cards';
import AlertP from './AlertP';


const DataCanvas = [
  { 
      
     
      "buttonimg":"/empcarne.jpg"
          
  }
  ,
  { 
      
      
      "buttonimg": '/capresse.jpg'
  }
  ,
  { 
      
     
      "buttonimg":'/goodburger.jpeg'
  }
  
  ];

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (

      <>

      {DataCanvas.map((e) =>
   
      {
      return (
      <>
      <Button id="CanvasButton" onClick={handleShow}>
        <img id="imgCanvas" src={e.buttonimg}
         width="200px" 
         height="140px"
         />
      </Button>
      <Offcanvas  show={show} onHide={handleClose} id="Canvas">
        <body>
        <Offcanvas.Header id="CanvasHead1" closeButton>
        </Offcanvas.Header>
        </body>       
      
        <Offcanvas.Body> 
        <AlertP/>
        </Offcanvas.Body>
    
        
      </Offcanvas>
     
      </>
        )
    
    })
  
    }

</>
  );
}

export default Example;