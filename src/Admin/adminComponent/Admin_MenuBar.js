import React from "react";
import {Navbar, Container, Nav,NavDropdown,Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const AdminMenuBar=()=>


{
  const history =useHistory();
  var userinfo= localStorage.getItem("myUserName")


  const hadleLogOut=()=>
      {
        localStorage.removeItem("myUserName");
        localStorage.removeItem("myPassword")
        history.push("./adminlogin")
      }
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
  <Container style={{fontSize:22,fontWeight:"bold"}}>
<Navbar.Brand href="/admin_home" style={{fontWeight:"bold", fontSize:19}}> श्री वीर तेजा </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className= "justify-content-end" style={{ width: "100%" }}>
      <NavDropdown title="समिति" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin_samiti_Uddeshay">समिति उद्देश्य</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin_samiti_Sadasay">समिति सदस्य</NavDropdown.Item>
        
      </NavDropdown>

      <NavDropdown title="सहयोग" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin_arthik_Sahyog">आर्थिक सहयोग / घोषणा</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin_gaiArthik_Sahyog">गैर आर्थिक सहयोग / घोषणा</NavDropdown.Item>
        
      </NavDropdown>
      
      
      <NavDropdown title="खर्चा" id="collasible-nav-dropdown">
        <NavDropdown.Item href="admin_expd_cat">Manage Expd Cat.</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="admin_manage_expenditure">Manage Expenditure </NavDropdown.Item>
        
      </NavDropdown>
      
      <Nav.Link href="admin_gallary">गेलेरी</Nav.Link>
      
      <Nav.Link href="admin_about" >हमारा परिचय </Nav.Link>
      <div style={{marginLeft:30}}>
      <label style={{color:"white"}}>{userinfo}</label>
      <Button variant="link" onClick={hadleLogOut} >LogOut</Button>
      </div>
      
    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    );
}
export default AdminMenuBar;