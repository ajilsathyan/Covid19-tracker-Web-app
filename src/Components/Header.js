import React, {  Component } from 'react';
import {Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';


class Header extends  Component {
     

    render(){

        return(

            <div>
                <Navbar collapseOnSelect expand="lg" style={{ background:"#6610f2"}} variant="dark">
                    <div className="virusimage" style={{width:"50px",height:"50px"}}>
                       <span><img style={{width:"50px",height:"50px"}} src="https://images.newscientist.com/wp-content/uploads/2020/02/11165812/c0481846-wuhan_novel_coronavirus_illustration-spl.jpg"/></span>
                    </div>
                  <Navbar.Brand ><Link to="/" style={{color:"white", textDecorationLine:"none",paddingLeft:"5px"}}><strong>COVID-19 TRACKER</strong></Link></Navbar.Brand>
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                     <Link to="/India" style={{color:"#fdf614",textDecorationLine:"none",paddingLeft:"30px"}}><strong>India</strong></Link>
                     <Link to="/World" style={{color:"#fdf614",textDecorationLine:"none",paddingLeft:"30px"}}><strong>World</strong></Link>
                   </Nav>
                  </Navbar.Collapse>
             </Navbar>
            </div>
        );
    }

}

export default Header;