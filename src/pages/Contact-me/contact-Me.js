import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../layout/DefaultLayout'

const Contact = () => {
    return (
        <DefaultLayout>
          
      
            <Form className="container-fluid " >
          <h1 ><strong> Lets talk  </strong></h1> <br />
          <h5>Get in touch via the form below, or by emailing
          
          <a className="text-danger" href="mailto:pyakurelsagar35@gmail.com"  target="_blank" rel= "noreferrer"> pyakurelsagar35@gmail.com</a>
          
          </h5> <hr />
          <br/>
  <div className="conatiner mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> Name *</Form.Label>
      <Form.Control type="name" placeholder="Enter your name" required/>
    </Form.Group> <br/>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Email * </Form.Label>
              <Form.Control type="name" placeholder="Please enter your email " required />
            </Form.Group>
            <br/>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={5} />
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

export default Contact
