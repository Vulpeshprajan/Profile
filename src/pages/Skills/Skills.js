import ProgressBar from 'react-bootstrap/ProgressBar'
import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import "./Skills.style.css"
import { Container, Row } from 'react-bootstrap'
const Skills = () => {


    return (
      <DefaultLayout>
        <Container>
        <Row>
         <section id="skills" >
  
        <div class="row">
          <div class="col">
              </div>
            <div class="section-title text-center py-4">Skills</div>
          </div>
        <div class="row">
        <div class="col">
                <div className="skills">
            <div><i className="fab fa-html5 text-danger "></i>Html  <ProgressBar variant= "danger"  now={95}  />  </div> <br/>
            <div> <i className="fab fa-css3-alt text-primary"></i>CSS <ProgressBar  now={95} /></div> <br/>
            <div><i className="fab fa-node-js text-warning"></i>Java Script <ProgressBar variant= "warning"  now={95} /></div> <br/>
            <div><i className="fab fa-github text-dark"></i>Github <ProgressBar variant= "dark"  now={95} /></div> <br/>
            <div><i class="fas fa-database text-success" ></i>MongoDb <ProgressBar variant= "success"  now={95} /></div> <br/>
            <div><i class="fab fa-react text-primary"></i> React <ProgressBar variant= "primary"  now={95} /></div> <br/>
            <div><i className ="fab fa-node-js text-success"></i>Node.js<ProgressBar variant= "success"  now={95} /></div> <br/>
            <div><i className="fas fa-users-cog text-info"></i>Problem solving<ProgressBar variant= "info"  now={95} /></div> <br/>
            <div><i className="fas fa-palette text-success"></i>Design <ProgressBar variant= "success"  now={95} /></div> <br/>
            <div><i class="fas fa-users text-danger"></i>Team work<ProgressBar variant= "danger"  now={95} /></div> <br/>
            
                        </div>
                        </div>
                    </div>
          </section>
          </Row>
                    </Container>
           </DefaultLayout>
    )
}

export default Skills
