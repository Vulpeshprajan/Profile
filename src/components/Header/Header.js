import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import sth from "../../assets/resume.docx";
import "./Header.style.css";
const Header = () => {
    return (
        <div>
            
            <Navbar collapseOnSelect bg="dark" expand="md">
				<Container>
					<LinkContainer to="/dashboard">
						<Navbar.Brand href="#home"> </Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className=" ms-auto bg-light">
					
							<div className="resume">
								<button className="bg-info"> 
							<a href={sth} download="sagar resume" >Resume</a>  
							</button>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>

       
    )
}

export default Header
