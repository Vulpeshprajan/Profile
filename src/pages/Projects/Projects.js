import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Cal from "../../assets/calculator.PNG";
import NTD from "../../assets/ntd.PNG";
import flex from "../../assets/flex.PNG";
import "./projects.css";


const Projects = () => {
    return (
        <DefaultLayout>
  <section >
        {/* <div className="container" id="projects"> */}

          <div className="row">
                <div className="col">
                    <div className="section-title text-center py-4">Projects</div>
          </div>
    </div>
            
            <div className="row py-5">
                <div className="col-md-5 order-md-2">
                   
                <img src={NTD} alt="need  " width="100%" height="auto"/>
                </div>
                    <div className="col-md-7 order-md-1">
                        <h2>To-Do Lists</h2>
                        <div>
                           <div><strong>Tech: Html, CSS, Js </strong> 
                        </div>
                        <p>
                            <strong>About: </strong>
                                I use Html, CSS and Javascript to develop this project which allow us to add things as to-do task. A to-do list is a handy tool to help you stay more focused on the important things in your life and career.The basic features of this project is that we can add things that needs to do like a planner and can move to not to-do section if the task is already done. We have a button to move from to-do lists to not to-do lists and a button to delete tasks. We have functionality to add tasks and hours which are calculated in each section to-do list and not to-do
                            </p>
                        </div> 
                    </div>
                    </div>

   

            <div className="row py-5">
                <div className="col-md-5 order-md-1">
                   
                <img src={flex} alt="need  " width="100%" height="auto"/>
                </div>
                    <div className="col-md-7 order-md-2">
                        <h2>Blog </h2>
                        <div>
                            <div >
                                <strong>Tech:  Html, CSS </strong>
                               
                        </div>
                        <p>
                                <strong>About: </strong>
                                
                                    For this webiste I use basic HTML and CSS. I design some nav bar, logo and list items in a blog. It's a simple website design made when I first started to code.
                                
                        </p>
                        </div> 
                    </div>
                    </div>

         

          <div className="row py-5">
                <div className="col-md-5 order-md-2">
                   
                <img src={Cal} alt="need  " width="100%" height="auto"/>
                </div>
                    <div className="col-md-7 order-md-1">
                        <h2>Calculator</h2>
                        <div>
                           <div ><strong>Tech: Html, CSS, Js </strong>
                        </div>
                        <p>
                            <strong>About: </strong>
                                For this project I use basic component Html, CSS & JavaScript.
                                The project have the same functionality of a normal calulator where user can do all the operation of basic calculator.
                                The only unique functionality is that the calculator is made for fun as a prank calulator which generate random value with the help of JavaScript.
                            </p>
                        </div> 
                    </div>

                    </div>









    </section>
   </DefaultLayout>
    )
}

export default Projects
 
