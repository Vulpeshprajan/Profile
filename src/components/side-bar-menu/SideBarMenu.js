import React from "react";
import { Link } from "react-router-dom";
import "./side-bar-menu.style.css";
export const SideBarMenu = () => {
	return (
		<div className="side-bar-menu">
			<Link to="/home" className="logo">
				<div className="logo">S</div>
				<div className="logo1">S</div>
			
			</Link>
			<hr style={{ border: "1px solid white" }} />
			 
			<div className="social">
			
           <a href="https://www.linkedin.com/in/sagar-pyakurel-617917174/" rel= "noreferrer" target="_blank"> <i className="fab fa-linkedin-in text-primary"></i></a>
			   
            <a  href="https://www.facebook.com/prajan.ace" target="_blank" rel= "noreferrer"><i className="fab fa-facebook text-light"></i> </a>
            <a  href="mailto:pyakurelsagar35@gmail.com" rel= "noreferrer"><i className="fas fa-inbox text-danger"></i> </a>
            <a  href="https://github.com/Vulpeshprajan" rel= "noreferrer"><i className="fab fa-github text-light"></i> </a>
   
		
            <a href="https://twitter.com/prajanpyakurel" rel= "noreferrer">  <i className="fab fa-twitter text-primary"></i></a>
            
			</div>
			<hr style={{ border: "1px solid white" }} />

			<div className="menu-list">
				<ul>
					<li>
						<Link className="menu-item" to="/home">
						<i className="fas fa-house-user text-danger"></i>  Home
						</Link>
					</li>

					<li>
						<Link className="menu-item" to="/skills">
						<i className="fab fa-react text-info"></i> Skills
						</Link>
					</li>
					<li>
						<Link className="menu-item" to="/About-Me">
						<i className="far fa-address-card text-success"></i>  About Me
						</Link>
					</li>
					<li>
						<Link className="menu-item" to="/Projects">
						<i className="fas fa-tasks text-primary"></i> Projects
						</Link>
					</li>
					<li>
						<Link className="menu-item" to="/Contact">
						<i className="fas fa-mobile-alt text-warning"></i> Contact
						</Link>
					</li>
					
				
				</ul>
			</div>
		</div>
	);
};
