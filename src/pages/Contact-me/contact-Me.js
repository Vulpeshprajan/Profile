
import React, { useState } from "react";

import { Button, Col, Form, Row } from 'react-bootstrap'
import DefaultLayout from '../layout/DefaultLayout'
import social from "../../assets/social.jpg"
import "./Contactme.style.css";


  const initialForm = {
    name: "",
    email: "",
    message: ""
  };

  export const Contact = ({ contactMe }) => {
    



    return (
        <DefaultLayout>
          
      
          <Row>
        <div className="container "  >
          <h1 ><strong> Lets talk  </strong></h1> <br />
          <h5>Get in touch via the social media below
          
          
          
          </h5> <hr />
            <br />
            </div>
            </Row>
          
        <Row>
          <Col>
          <img src={social} alt=" social media" width="80%" height="auto"/>
          
          </Col>
          <Col >
       
             
            <div className="profile" >    
  
        
            
                <div>

         <a href="https://www.linkedin.com/in/sagar-pyakurel-617917174/" rel= "noreferrer" target="_blank"> <i className="fab fa-linkedin-in text-primary"></i> Sagar-pyakurel </a>
                </div>
                <br/>
                
                <div>         
      <a href="https://github.com/Vulpeshprajan" target="_blank" rel="noreferrer"><i className="fab fa-github text-dark"></i> Sagar Pyakurel</a>
              
              </div>   
              <br /> 

                <div>
                <a  href="https://www.facebook.com/prajan.ace" target="_blank" rel= "noreferrer"><i className="fab fa-facebook text-primary"></i> prajan.ace </a>

                </div>
                <br/>
                

                <div>
                <a  href="mailto:pyakurelsagar35@gmail.com"  target="_blank" rel= "noreferrer"><i class="fas fa-envelope text-warning"></i> pyakurelsagar35@gmail.com </a>
 
                </div>
                <br/>
                

                <div>
                <a href="https://twitter.com/prajanpyakurel"  target="_blank" rel= "noreferrer">  <i className="fab fa-twitter text-primary"></i> @prajanpyakurel </a>
                </div>
                </div>
        
          </Col>
          </Row>   
  
        
        
        
   </DefaultLayout>
    )
}


