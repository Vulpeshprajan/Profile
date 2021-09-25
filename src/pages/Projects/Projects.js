import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Cal from "../../assets/calculator.PNG";
import NTD from "../../assets/ntd.PNG";
import flex from "../../assets/flex.PNG";

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
                        <h2>To-DO Lists</h2>
                        <div>
                           <div className="fst-italic"><strong>Tech:</strong> HTML, CSS, JS
                        </div>
                        <p>
                            <strong>About: </strong>
                            We use HTML, CSS and Javascript to develop this project which allow us to add things as to-do task. We have a button that triggers "onClick" even to shift to Not to-do Lists.
                            We have functionality to add tasks and hours which are calculated in each section to-do list and
                            Not to-do
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
                            <div className="fst-italic">
                                <strong>Tech: </strong> HTML, CSS
                               
                        </div>
                        <p>
                                <strong>About: </strong>
                                
                                    For this webiste we use basic HTML and CSS. We design some nav bar, logo and list items in a blog.
                                
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
                           <div className="fst-italic"><strong>Tech:</strong> HTML, CSS, JS
                        </div>
                        <p>
                            <strong>About: </strong>
                                For this project I use basic component HTML, CSS & JavaScript.
                                We have the same functionality of a normal calulator as we can do all the operation of basic calculator.
                                The only unique functionality is that the calculator generate random value with the help of JavaScript.
                            </p>
                        </div> 
                    </div>

                    </div>









    </section>
   </DefaultLayout>
    )
}

export default Projects
 
