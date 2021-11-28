import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import MenuBar from "../Component/MenuBar";
import MaterailTable from "material-table";
import Axios from "axios";
import { FormatAlignJustify } from "@material-ui/icons";



const Kharcha=()=>
{
   const [kharchaList, setKharchaList]= useState([])

    useEffect(()=>{
        Axios.get("http://18.118.60.4:9393/getAllActiveExpenditures")
        .then((resp)=>{
            setKharchaList(resp.data);
            // console.log(resp.data);
            //console.log(kharchaList)
        }
        )
    },[])
    // const data =[
    //     {serial_No:"1",receiptNo:10, date:"2020-10-10",receiverName:"महावीर",detail :"सीमेंट पेमेंट किया", amount:"50000"},
    //     {serial_No:"1",receiptNo:10, date:"2020-10-10",receiverName:"महावीर",detail :"सीमेंट पेमेंट किया", amount:"50000"},
    //     {serial_No:"1",receiptNo:10, date:"2020-10-10",receiverName:"महावीर",detail :"सीमेंट पेमेंट किया", amount:"50000"},
    //     {serial_No:"1",receiptNo:10, date:"2020-10-10",receiverName:"महावीर",detail :"सीमेंट पेमेंट किया", amount:"50000"},
    //     {serial_No:"1",receiptNo:10, date:"2020-10-10",receiverName:"महावीर",detail :"सीमेंट पेमेंट किया", amount:"50000"},
        
    //     ];
        const colom =[
        {title:"क्रम संख्या", field:"expdId", width:"25%"}, {title:"राशि",field:"expdAmount"},
        {title :"भुगतान प्राप्तकर्ता का नाम", field:"receiverName"},  {title:"खर्चा का विवरण", field:"expdDetail"}, 
         {title :"दिनांक", field:"expdDate"},{title:"रशीद संख्या", field:"expdReceiptNo"},
         
    ]
        
        
    return(
        <div>
            <MenuBar/>
            {/* <h3 className="Hover1">कुल खर्चा सूची</h3> */}
            <h3 style={{display:"flex",justifyContent:"center",alignContent:"center",color:"green",fontSize:26, margin:50}}>कुल खर्चा सूची</h3>

            <MaterailTable
             title =""
             data={kharchaList}
             columns={colom}
             options={{
                exportButton: true,
                sorting:true,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF', fontSize:20},
                    
              }}
              />
        
           <Footer/>

        </div>
    )
}
export default Kharcha;