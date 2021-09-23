
import './App.css';

// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About-me/about-Me";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact-me/contact-Me";





const  App = () => {
  return (
    <div>
      <Router>
        <Switch>
          
					<Route path exact ="/" children={<Home />} />
					<Route path ="/home" children={<Home />} />
					<Route path ="/skills" children={< Skills/>} />
					<Route path ="/About-Me" children={<About />} />
					<Route path ="/Projects" children={<Projects />} />
					<Route path ="/Contact" children={<Contact />} />
				</Switch>
			</Router>


  </div>
  )} 

export default App;
