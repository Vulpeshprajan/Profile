import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../layout/DefaultLayout'

const Contact = () => {
    return (
        <DefaultLayout>
          
      
            <Form className="container-fluid">
                <h1 >Enquiry Form </h1> <br/>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> First Name *</Form.Label>
      <Form.Control type="name" placeholder="Enter your first name " required/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name * </Form.Label>
      <Form.Control type="name" placeholder="Please enter your last name "  required/>

    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 suburb " />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group> */}

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>NSW</option>
        <option>ACT</option>
        <option>TAS</option>
        <option>WA</option>
        <option>NT</option>
        <option>QLD</option>
        <option>VIC</option>
        <option>SA</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postcode</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   </DefaultLayout>
    )
}

export default Contact
