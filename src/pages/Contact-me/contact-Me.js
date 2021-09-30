
import React, { useState } from "react";

import { Button, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../layout/DefaultLayout'
import "./Contactme.style.css";


  const initialForm = {
    name: "",
    email: "",
    message: ""
  };

  export const Contact = ({ contactMe }) => {
    const [frmData, setFrmData] = useState(initialForm);
  
    const handleOnChange = e => {
      const { name, value } = e.target;
      setFrmData({
        ...frmData,
        [name]: value,
      });
      console.log(name, value);
    };
  
    const handleOnSubmit = e => {
      // e.preventDefault();
      contactMe(frmData);
    };



    return (
        <DefaultLayout>
          
      
            <Form onSubmit={handleOnSubmit} className="container " >
          <h1 ><strong> Lets talk  </strong></h1> <br />
          <h5>Get in touch via the form below, or by emailing
          
          <a className="mail" href="mailto:pyakurelsagar35@gmail.com"  target="_blank" rel= "noreferrer"> pyakurelsagar35@gmail.com</a>
          
          </h5> <hr />
          <br/>
  <div className="conatiner mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> Name *</Form.Label>
              <Form.Control
                 name="name"
                type="name"
                value={frmData.name}
                placeholder="Enter your name"
                onChange={handleOnChange}
                required />
    </Form.Group> <br/>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email * </Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={frmData.email}
                placeholder="Please enter your email "
                onChange={handleOnChange}
                required />
            </Form.Group>
            <br/>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                type="message"
                value={frmData.message}
                as="textarea"
                onChange={handleOnChange}
                rows={5} />
  </Form.Group>
             <br/>
            
  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
 </div>

  
        </Form>
        
        
   </DefaultLayout>
    )
}


