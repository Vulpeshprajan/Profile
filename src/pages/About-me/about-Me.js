import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import logo1 from "../../assets/s3.png"
import { Col, Container, Row } from 'react-bootstrap'
import  "./Aboutme.style.css";

const About = () => {
    return (
        <DefaultLayout>
             <Container>
                <Row>
                    <Col>
                    <div className="section-title">Sagar Pyakurel</div>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={6}>
                    
                    <img src={logo1} alt=" taking selfie" width="60%" height="auto"/>
                    </Col>
                    <Col md={6}>
                        <h2>Let me introduce myself</h2>
                        <div className="aboutme"> 
        <p>
                                
        I am Sagar Pyakurel. I am a recent BIT graduate student from Kent Institute, Australia. I am also enrolled in a Job Ready Program ( JRP) to advance and gain more practical knowledge for IT. I am a hard working, committed and quick learner person.

        At present context, I am looking for full-time or part-time as Junior developer with the knowledge of html , Css, Javascript, bootstrap, & MERN stack in IT sector. I want to grow myself and boost my confidence and experience in IT job environment.

                                I am always open to network and new opportunities along with recommendations.
        <br/>                        Kindly, support me with opportunities available.
         Below is my email address for communication or you can message me as well. 
        <br />
                                E: pyakurelsagar35@gmail.com

      </p>
      </div>
                    
                    </Col>


                </Row>





            </Container>
   

   </DefaultLayout>
    )
}

export default About


