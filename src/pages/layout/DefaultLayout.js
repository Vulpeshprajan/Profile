import React from 'react'
import { SideBarMenu } from '../../components/side-bar-menu/SideBarMenu';
import Header from "../../components/Header/Header.js";
import Footer from "../../components/footer/Footer.js";
import "./defaultLayout.style.css"

 const DefaultLayout = ({children}) => {
    return (
           <div className="admin-layout">
			<div className="left bg-dark">
				<SideBarMenu />
			</div>
			<div className="right">
				<Header />
				<div className="main">{children}</div>

				<Footer />
			</div>
		</div>

            
       
  
          
  
    )
}


export default DefaultLayout; 
