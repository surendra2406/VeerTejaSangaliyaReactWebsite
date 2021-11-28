import React from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import  {Card} from "react-bootstrap"


const HamareBareMai=()=>
{
    return(
        <div>
            <MenuBar/>
            <div  style={{  margintop:"30"}}>
                 <Card className="text-center"  style={{ height: '15rem'}} >
                <Card.Body>
                    <Card.Title style={{color:"green", fontSize:26, fontWeight:"bold"}}> डिजिटल दानदाताओ के लिये</Card.Title>
                    <Card.Text>
                    फोन पे/ गूगल पे/ पेटीएम
                    </Card.Text>
                    <Card.Text>
                    Mob. 96944-84119 (Mahaveer Singh)
                    </Card.Text>
                </Card.Body>

                </Card>
            </div><div>
                 <Card className="text-center"  style={{ height: '15rem'}} >
                <Card.Body>
                    <Card.Title style={{color:"green", fontSize:26, fontWeight:"bold"}}>सम्पर्क सूत्र</Card.Title>
                    <Card.Text>
                    मोबाइल न0-  7340412312
                    </Card.Text>
                    <Card.Text>
                     ई-मेल- veertejasangaliya@gmail.com 
                    </Card.Text>
                </Card.Body>

                </Card>
            </div>

            <div>
                 <Card className="text-center"  style={{ height: '15rem' }} >
                <Card.Body>
                    <Card.Title style={{color:"green", fontSize:26, fontWeight:"bold"}}> सहयोग के लिए-</Card.Title>
                    <Card.Text> Account holder Name-shree veer teja vikas samiti sangaliya </Card.Text>
                    <Card.Text>Account No.-920010003873067 </Card.Text>
                    <Card.Text>Ifsc Code-UTIB0001795  </Card.Text>
                    <Card.Text>Axis Bank Losal </Card.Text>

                </Card.Body>

                </Card>
            </div>

           
           <Footer/>

        </div>
    )
}
export default HamareBareMai;