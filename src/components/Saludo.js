import React from "react";
import { Form } from "react-bootstrap";

const Saludo = (props) => {
    return (
      <Form>
        <h2>Hola {props.id}</h2>     
      </Form>
    );
}

export default Saludo;