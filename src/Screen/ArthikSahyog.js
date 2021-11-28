import React from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";
import "../../src/App.css";



const ArthikSahyog=()=>
{

    const data =[
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", address:"सांगलिया",announcement:"200000", deposit :"150000", pendding:"50000", file:""},
    {serial_No:"1",name:"श्री महेंद्र कुमार बुरडक ", address:"सांगलिया",announcement:"51000", deposit :"21000", pendding:"30000", file:""},
    
    ];
    const colom =[{title:"क्रम संख्या", field:"serial_No", width:"25%"}, {title:"सहयोग कर्ता का नाम", field:"name"}, {title :"सहयोग कर्ता का पता", field:"address"},{title :"घोषणा की गयी राशि", field:"announcement"}, {title:"जमा राशि", field:"deposit"}, {title:"बकाया राशि", field:"pendding"}, {title:"रशीद", field:"file"},
]
    
    
    return(
        <div>
            <MenuBar/>
            {/* <h3 className="Hover1">आर्थिक सहयोग सूची</h3> */}
            <h3 style={{display:"flex",justifyContent:"center",alignContent:"center",color:"green",fontSize:26, margin:50}}>आर्थिक सहयोग सूची</h3>
            <div style={{ fontSize:20, fontWeight:'bold',color:'blue'}}>
               <p> कुल सहयोग की घोषणा राशि -   {}</p>
               <p> कुल घोषणा की जमा राशि -   {}</p>
               <p> कुल घोषणा की बकाया राशि -   {}</p>
        </div>
        
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
export default ArthikSahyog;
