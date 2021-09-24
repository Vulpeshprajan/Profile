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
                        <h2>Project</h2>
                        <div>
                           <div className="fst-italic"><strong>Tech:</strong> HTML, CSS, JS
                        </div>
                        <p>
                            <strong>About:</strong>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur quis repellat minus deleniti quidem corrupti, ex esse similique veritatis repellendus officiis ab perferendis. Molestias sit fuga veniam cum fugiat.
                        </p>
                        </div> 
                    </div>
                    </div>

   

            <div className="row py-5">
                <div className="col-md-5 order-md-1">
                   
                <img src={flex} alt="need  " width="100%" height="auto"/>
                </div>
                    <div className="col-md-7 order-md-2">
                        <h2>No to do list</h2>
                        <div>
                           <div className="fst-italic"><strong>Tech:</strong> HTML, CSS, JS
                        </div>
                        <p>
                            <strong>About:</strong>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur quis repellat minus deleniti quidem corrupti, ex esse similique veritatis repellendus officiis ab perferendis. Molestias sit fuga veniam cum fugiat.
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
                            <strong>About:</strong>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consectetur quis repellat minus deleniti quidem corrupti, ex esse similique veritatis repellendus officiis ab perferendis. Molestias sit fuga veniam cum fugiat.
                        </p>
                        </div> 
                    </div>

                    </div>









    </section>
   </DefaultLayout>
    )
}

export default Projects
 
