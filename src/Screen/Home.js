import React from "react";
import MenuBar from "../Component/MenuBar";
import Slider from "../Component/Slider";
import LatestNews from "../Component/LatestNews";
import Footer from "../Component/Footer";
import Cards from "../Component/Cards";
import Cards4 from "../Component/Cards4";
import { Container, Col,Row } from "react-bootstrap";
import Cards2 from "../Component/Cards2";
const Home =()=>
{
    return(
        <div>
           <MenuBar/>
            <Slider/>
            
         
              <Container style={{marginTop:110}}>
              <Row >
                <Col><Cards title="10 उच्चतम भामाशाह" /></Col>
                <Col><Cards title="कुल प्राप्ति और खर्चा" subtitle1="कुल घोषणा" subtitle2=" कुल प्राप्ति " subtitle3=" कुल खर्चा" value1="7000000" value2="5500000" value3="600000"/></Col>
                <Col><Cards title="गत मास का कुल प्राप्ति और खर्चा"/></Col>
              </Row>
              <Row >
                <Col><Cards title="गूगल / फ़ोन पे "/></Col>
                <Col><Cards4 title="समिति बैंक खाता विवरण" subtitle1="खाता धारक का नाम" subtitle2="बैंक नाम " subtitle3="खाता संख्या"  subtitle4="IFSC कोड" value1="श्री वीर तेजा विकास समिति सांगलिया" value2="Axis Bank Losal"  value3="920010003873067" value4="UTIB0001795"/></Col>
                <Col><Cards2 title="Visitors"  subtitle1 =" Unique Visitors" subtitle2="Total Visitors" value1="500000" value2 ="1,000,000 " /></Col>
                
              </Row>
              </Container>
              <LatestNews/>
            <Footer/>
        </div>
    );
}
export default Home;