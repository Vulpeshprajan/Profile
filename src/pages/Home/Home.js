import React from 'react'
import DefaultLayout from "../layout/DefaultLayout";
import "./Home.style.css"
import  logo  from "../../assets/home.jpg";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <DefaultLayout>
            <div className="container hero">
        <div className="row mt-3">
          <div className="col-md-5 order-md-2">
            <img src={logo} alt="sagar" width="80%," height="auto;" />
          </div>
          <div className="col-md-7 order-md-1 hero-text">
            <h5>  Hi there welcome to my website</h5>
            <h1>I'm Sagar Pyakurel</h1>
            <p>
              I'm a full stack developer always passionate about solving the
              problem & creating always a new design from nothing.
            </p>
                <div>
                <Link to="/Contact">
                <button type="button" className="btn btn-danger"> Hire Me!</button>
                   <br /> <br />

                   </Link>
                  <Link to="/About-Me">
                    
                  <button type="button" className="btn btn-info" >  Find out more about me 
              </button>
					
						</Link>
                  
              <hr />
            </div>
          </div>
        </div>
      </div>
    

           </DefaultLayout>
        </div>
    )
}

export default Home
