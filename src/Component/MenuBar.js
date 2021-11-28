import React from "react";
import {Navbar, Container, Nav,NavDropdown,} from "react-bootstrap"

const MenuBar=()=>
{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
  <Container style={{fontSize:22,fontWeight:"bold"}}>
<Navbar.Brand href="/" style={{fontWeight:"bold", fontSize:19}}> श्री वीर तेजा विकास समिति सांगलिया-सीकर (राज.)</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className= "justify-content-end" style={{ width: "100%" }}>
      <NavDropdown title="समिति" id="collasible-nav-dropdown">
        <NavDropdown.Item href="samiti_Uddeshay">समिति उद्देश्य</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="samiti_Sadasay">समिति सदस्य</NavDropdown.Item>
        
      </NavDropdown>

      <NavDropdown title="सहयोग" id="collasible-nav-dropdown">
        <NavDropdown.Item href="arthik_Sahyog">आर्थिक सहयोग / घोषणा</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="gaiArthik_Sahyog">गैर आर्थिक सहयोग / घोषणा</NavDropdown.Item>
        
      </NavDropdown>
      
      <Nav.Link href="kharcha" >खर्चा</Nav.Link>
      <Nav.Link href="gallary">गेलेरी</Nav.Link>
      
      <Nav.Link href="about">हमारे बारे में </Nav.Link>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
}
export default MenuBar;