import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './canvas.css'
import AlertE from './AlertE';


const DataCanvas = [
  { 
      "buttonimg":"/empcarne1.jpg"        
  }
  
  
  ];

function CanvasE() {
  const [show, setShow] = useState(false);
  const [Dc, setDc] = useState(DataCanvas);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (

      <>

      {DataCanvas.map((props) =>
   
      {
      return (
      <>
      <Button className="CanvasButton" variant="secondary" id={props.id} onClick={handleShow}>
        <img id="imgCanvas" src={props.buttonimg}
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
        <AlertE/>
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

export default CanvasE;