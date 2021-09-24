import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
						<Nav className="ms-auto bg-light">
					
							<Nav.Link  > <strong  style={{ color: "black" }}> Portfolio </strong> </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>

       
    )
}

export default Header
