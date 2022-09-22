import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './canvas.css'
import ModalP from './ModalP';


const DataCanvas = [
  { 
      "buttonimg": '/capresse.jpg'
  }
  ];

function CanvasP() {
  const [show, setShow] = useState(false);
  const [Dc, setDc] = useState(DataCanvas);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (

      <>

      {DataCanvas.map((e) =>
   
      {
      return (
      <>
      <Button className="CanvasButton" variant="secondary" id={e.id} onClick={handleShow}>
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
        <>
        <Offcanvas.Body> 
        <ModalP/>
        </Offcanvas.Body>
        </>
        
      </Offcanvas>
     
      </>
        )
    
    })
  
    }

</>
  );
}

export default CanvasP;