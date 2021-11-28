import React from "react";
import MaterailTable from "material-table";

import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";


const SamitiSadasay=()=>
{
   		
    const data =[{serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", post:"अध्यक्ष",mobile:"8079068976", photo :"Null"},
    {serial_No:"2",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", post:"उपाध्यक्ष",mobile:"9468686953", photo :"Null"},
    {serial_No:"3",name:"श्री कोजाराम सेवदा पुत्र कुशला राम", post:"कोषाध्यक्ष",mobile:"9869170574", photo :"Null"},
    {serial_No:"4",name:"श्री रामगोपाल ओला पुत्र टोड़ा राम", post:"मंत्री",mobile:"9549853105", photo :"Null"},
    {serial_No:"5",name:"श्री श्रवण जी गढ़वाल पुत्र श्री झुंझा राम", post:"उप मंत्री",mobile:"9982698858", photo :"Null"},
    {serial_No:"6",name:"श्री हनुमाना राम पुत्र बेगाराम जी धायल", post:"अध्यक्ष",mobile:"9571449685 ", photo :"Null"},
    {serial_No:"7",name:"श्री मोहन राम बुरड़क पुत्र खेताराम झुनकाबास", post:"अध्यक्ष",mobile:"9461045485", photo :"Null"},
    {serial_No:"8",name:"श्री बेगाराम माली पुत्र गोविंदराम", post:"अध्यक्ष",mobile:"9414037371", photo :"Null"},
    {serial_No:"9",name:"श्री कुम्भा राम ओला पुत्र नानू राम", post:"अध्यक्ष",mobile:"9929613119", photo :"Null"},
    {serial_No:"10",name:"श्री मदन लाल सुंडा पुत्र भगवाना राम", post:"अध्यक्ष",mobile:"9413463096", photo :"Null"},

    ];
    const colom =[{title:"क्रम संख्या", field:"serial_No", width:"25%"}, {title:"नाम", field:"name"}, {title :"पद", field:"post"},{title :"मोबाइल न.", field:"mobile"}, {title:"फोटो", field:"photo"}]
    
    
    return(
        <div>
             <MenuBar/>
             <h1 style={{textAlign:"center", color:"white", padding:10, backgroundColor:"#01579b"}}>श्री वीर तेजा विकास समिति उद्देश्य सूची</h1>
             

             <MaterailTable
             title =""
             data={data}
             columns={colom}
             options={{
                exportButton: true,
                selection: true,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF', fontSize:20},
                    
              }}
             />
           <Footer/>
        </div>
    )
}
export default SamitiSadasay;