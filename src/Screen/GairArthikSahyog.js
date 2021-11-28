import React from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";


const GaiArthikSahyog=()=>
{
    const data =[
        {serial_No:"1",name:"श्री सीताराम सुंडा पुत्र श्री कुन्दन मल सुंडा", detail:"kuch bhi",mobileNo:"200000"},
        ];
        const colom =[{title:"क्रम संख्या", field:"serial_No", width:"25%"}, 
        {title:"सहयोग कर्ता का नाम", field:"name"}, {title :"सहयोग का विवरण", field:"detail"},{title :"मोबाइल न.", field:"mobileNo"},
    ]
        
    return(
        <div>
            <MenuBar/>
            <h1 style={{display:"flex",justifyContent:"center",alignContent:"center",color:"green",fontSize:26, margin:50}}>गैर आर्थिक सहयोग :-</h1>
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
export default GaiArthikSahyog;